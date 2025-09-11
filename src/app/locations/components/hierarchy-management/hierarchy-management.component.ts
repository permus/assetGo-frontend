import {Component, OnInit, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Subject, takeUntil} from 'rxjs';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {LocationService, Location} from '../../services/location.service';
import {DeleteConfirmationModalComponent} from '../delete-confirmation-modal/delete-confirmation-modal.component';

interface HierarchyNode {
  id: number;
  name: string;
  type: any;
  hierarchy_level: number;
  asset_count: number;
  children: HierarchyNode[];
  parent_id?: number;
  selected?: boolean;
  expanded?: boolean;
}

@Component({
  selector: 'app-hierarchy-management',
  standalone: true,
  imports: [CommonModule, DragDropModule, DeleteConfirmationModalComponent],
  templateUrl: './hierarchy-management.component.html',
  styleUrl: './hierarchy-management.component.scss'
})
export class HierarchyManagementComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  hierarchyData: HierarchyNode[] = [];
  selectedNodes: Set<number> = new Set();
  loading = false;
  error = '';

  // Drag and drop state
  draggedNode: HierarchyNode | null = null;
  dropZoneActive = false;
  showDeleteConfirmationModal = false;
  selectedLocation: Location | null = null;

  constructor(private locationService: LocationService) {
  }

  ngOnInit() {
    this.loadHierarchy();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadHierarchy() {
    this.loading = true;
    this.error = '';

    this.locationService.getHierarchy()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.hierarchyData = this.transformHierarchyData(response.data.hierarchy);
          } else {
            this.error = 'Failed to load hierarchy data';
          }
          this.loading = false;
        },
        error: (error) => {
          this.error = error.error?.message || 'An error occurred while loading hierarchy';
          this.loading = false;
        }
      });
  }

  private transformHierarchyData(data: any[]): HierarchyNode[] {
    return data.map(item => ({
      id: item.id,
      name: item.name,
      type: item.type,
      hierarchy_level: item.hierarchy_level || 0,
      asset_count: item.asset_count || 0,
      children: item.children ? this.transformHierarchyData(item.children) : [],
      parent_id: item.parent_id,
      selected: false,
      expanded: true
    }));
  }

  // Selection methods
  toggleNodeSelection(node: HierarchyNode, event: MouseEvent) {
    event.stopPropagation();

    if (event.ctrlKey || event.metaKey) {
      // Multi-select mode
      if (this.selectedNodes.has(node.id)) {
        this.selectedNodes.delete(node.id);
        node.selected = false;
      } else {
        this.selectedNodes.add(node.id);
        node.selected = true;
      }
    } else {
      // Single select mode
      this.clearSelection();
      this.selectedNodes.add(node.id);
      node.selected = true;
    }
  }

  clearSelection() {
    this.selectedNodes.clear();
    this.updateSelectionState(this.hierarchyData, false);
  }

  private updateSelectionState(nodes: HierarchyNode[], selected: boolean) {
    nodes.forEach(node => {
      node.selected = selected;
      if (node.children.length > 0) {
        this.updateSelectionState(node.children, selected);
      }
    });
  }

  // Drag and drop methods
  onDragStart(event: any, node: HierarchyNode) {
    this.draggedNode = node;
    this.dropZoneActive = true;
    event.dataTransfer.effectAllowed = 'move';
  }

  onDragEnd(event: any) {
    this.draggedNode = null;
    this.dropZoneActive = false;
  }

  onDragOver(event: any) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }

  onDropToRoot(event: any) {
    event.preventDefault();

    if (this.draggedNode) {
      this.moveToRoot(this.draggedNode);
    }

    this.dropZoneActive = false;
    this.draggedNode = null;
  }

  onDropOnNode(event: any, targetNode: HierarchyNode) {
    event.preventDefault();
    event.stopPropagation();

    if (this.draggedNode && this.draggedNode.id !== targetNode.id) {
      this.moveToParent(this.draggedNode, targetNode);
    }

    this.dropZoneActive = false;
    this.draggedNode = null;
  }

  private moveToRoot(node: HierarchyNode) {
    // Remove from current parent
    this.removeNodeFromHierarchy(node);

    // Add to root level
    node.hierarchy_level = 0;
    node.parent_id = undefined;
    this.hierarchyData.push(node);

    // Call API to update
    this.updateLocationHierarchy(node.id, null);
  }

  private moveToParent(node: HierarchyNode, newParent: HierarchyNode) {
    // Remove from current parent
    this.removeNodeFromHierarchy(node);

    // Add to new parent
    node.hierarchy_level = newParent.hierarchy_level + 1;
    node.parent_id = newParent.id;
    newParent.children.push(node);
    newParent.expanded = true;

    // Call API to update
    this.updateLocationHierarchy(node.id, newParent.id);
  }

  private removeNodeFromHierarchy(nodeToRemove: HierarchyNode) {
    // Remove from root level
    const rootIndex = this.hierarchyData.findIndex(n => n.id === nodeToRemove.id);
    if (rootIndex !== -1) {
      this.hierarchyData.splice(rootIndex, 1);
      return;
    }

    // Remove from children recursively
    this.removeFromChildren(this.hierarchyData, nodeToRemove);
  }

  private removeFromChildren(nodes: HierarchyNode[], nodeToRemove: HierarchyNode): boolean {
    for (const node of nodes) {
      const childIndex = node.children.findIndex(child => child.id === nodeToRemove.id);
      if (childIndex !== -1) {
        node.children.splice(childIndex, 1);
        return true;
      }

      if (this.removeFromChildren(node.children, nodeToRemove)) {
        return true;
      }
    }
    return false;
  }

  private updateLocationHierarchy(locationId: number, newParentId: number | null) {
    this.locationService.moveLocations([locationId], newParentId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            console.log('Location moved successfully');
          } else {
            console.error('Failed to move location:', response.message);
            // Reload hierarchy on error
            this.loadHierarchy();
          }
        },
        error: (error) => {
          console.error('Error moving location:', error);
          // Reload hierarchy on error
          this.loadHierarchy();
        }
      });
  }

  // Bulk operations
  moveSelectedToRoot() {
    if (this.selectedNodes.size === 0) return;

    const selectedIds = Array.from(this.selectedNodes);
    this.locationService.moveLocations(selectedIds, null)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.loadHierarchy();
            this.clearSelection();
          }
        },
        error: (error) => {
          console.error('Error moving locations:', error);
        }
      });
  }

  deleteSelected() {
    if (this.selectedNodes.size === 0) return;
    this.selectedNodes.forEach(id => {
      this.loadLocation(id) // modal will be open in the load location function after data getting
    });
  }

  loadLocation(id: number) {
    this.locationService.getLocation(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.selectedLocation = response.data.location;
            this.showDeleteConfirmationModal = true;
          }
        },
      });
  }

  // Utility methods
  getNodeIcon(node: HierarchyNode): string {
    if (node.hierarchy_level === 0) {
      return 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4';
    } else if (node.hierarchy_level === 1) {
      return 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4';
    } else {
      return 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z';
    }
  }

  getNodeIconColor(node: HierarchyNode): string {
    if (node.hierarchy_level === 0) return 'blue';
    if (node.hierarchy_level === 1) return 'blue';
    return 'green';
  }

  getLevelText(node: HierarchyNode): string {
    return node.hierarchy_level === 0 ? 'Level 0' : 'Parent';
  }

  closeDeleteConfirmationModal() {
    this.showDeleteConfirmationModal = false;
    this.selectedLocation = null;
  }

  onLocationDeleted(){
    this.loadHierarchy();
    this.closeDeleteConfirmationModal();
  }

}
