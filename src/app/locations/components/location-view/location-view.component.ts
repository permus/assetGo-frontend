import {Component, OnInit, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {Subject, takeUntil} from 'rxjs';
import {LocationService, Location} from '../../services/location.service';
import {AddLocationModalComponent} from '../add-location-modal/add-location-modal.component';
import {EditLocationModalComponent} from '../edit-location-modal/edit-location-modal.component';
import {DeleteConfirmationModalComponent} from '../delete-confirmation-modal/delete-confirmation-modal.component';
import {AssignAssetsModalComponent} from '../assign-assets-modal/assign-assets-modal.component';
import {Location as angularLocation} from '@angular/common';

@Component({
  selector: 'app-location-view',
  standalone: true,
  imports: [CommonModule, RouterModule, AddLocationModalComponent, EditLocationModalComponent, DeleteConfirmationModalComponent, AssignAssetsModalComponent],
  templateUrl: './location-view.component.html',
  styleUrl: './location-view.component.scss'
})
export class LocationViewComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  location: Location | null = null;
  subLocation: Location | null = null;
  loading = true;
  error = '';
  ancestors: Location[] = [];

  // Sublocation data
  subLocations: Location[] = [];
  subLocationsLoading = false;

  // Assets data
  assets: any[] = [];
  assetsLoading = false;

  // Activities data
  activities: any[] = [];
  activitiesLoading = false;

  // Hierarchy expand/collapse state
  expandedNodes = new Set<number>();

  // Modal state
  showAddSubLocationModal = false;
  showEditLocationModal = false;
  showDeleteConfirmationModal = false;
  showAssignAssetsModal = false;
  showAddAssetDropdown = false;

  // Mock data for demonstration
  mockStats = {
    totalAssets: 0,
    healthScore: 100,
    subLocations: 0,
    totalValue: 0
  };

  isEditingSubLocation = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService,
    private angularLocation: angularLocation,
  ) {
  }

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const locationId = params['id'];
        if (locationId) {
          this.loadLocation(parseInt(locationId));
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadLocation(id: number) {
    this.loading = true;
    this.error = '';

    this.locationService.getLocation(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.location = response.data.location;
            // Update location asset_summary from response if available
            if (response.data.asset_summary) {
              this.location.asset_summary = response.data.asset_summary;
            }
            this.ancestors = response.data.ancestors || [];
            this.updateMockStats();
            this.loadSubLocations();
            this.loadAssets();
            this.loadActivities();
          } else {
            this.error = response.message || 'Failed to load location';
          }
          this.loading = false;
        },
        error: (error) => {
          this.error = error.error?.message || 'An error occurred while loading the location';
          this.loading = false;
        }
      });
  }

  loadAssets() {
    if (!this.location) return;

    this.assetsLoading = true;
    this.locationService.getLocationAssets(this.location.id, { per_page: 100 })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.assets = response.data.assets;
            // Update stats with real data
            this.mockStats.totalAssets = response.data.pagination.total;
          }
          this.assetsLoading = false;
        },
        error: (error) => {
          console.error('Failed to load assets:', error);
          this.assetsLoading = false;
        }
      });
  }

  loadSubLocations() {
    if (!this.location) return;

    this.subLocationsLoading = true;

    const params = {
      parent_id: this.location.id,
      per_page: 100
    };

    this.locationService.getLocations(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.subLocations = response.data.locations;
            
            // Load children for each sub-location recursively
            this.subLocations.forEach(subLoc => {
              this.loadChildrenRecursively(subLoc);
            });
            
            this.updateMockStats();
          }
          this.subLocationsLoading = false;
        },
        error: (error) => {
          console.error('Error loading sub-locations:', error);
          this.subLocationsLoading = false;
        }
      });
  }

  loadChildrenRecursively(location: any) {
    const params = {
      parent_id: location.id,
      per_page: 100
    };

    this.locationService.getLocations(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data.locations.length > 0) {
            location.children = response.data.locations;
            
            // Continue loading for deeper levels
            location.children.forEach((child: any) => {
              this.loadChildrenRecursively(child);
            });
          }
        },
        error: (error) => {
          console.error('Error loading nested children:', error);
        }
      });
  }

  updateMockStats() {
    if (this.location) {
      this.mockStats = {
        totalAssets: this.location.asset_summary?.asset_count || 0,
        healthScore: this.location.asset_summary?.health_score ?? 100,
        subLocations: this.subLocations.length,
        totalValue: this.location.asset_summary?.total_value || 0
      };
    }
  }

  goBack() {
    this.angularLocation.back();
  }

  editLocation() {
    this.isEditingSubLocation = false;
    this.showEditLocationModal = true;
  }

  addAsset() {
    this.router.navigate(
      ['/assets/create'],
      {queryParams: {location_id: this.location?.id}}
    );
    this.showAddAssetDropdown = false;
  }

  openAssignAssetsModal() {
    this.showAssignAssetsModal = true;
    this.showAddAssetDropdown = false;
  }

  closeAssignAssetsModal() {
    this.showAssignAssetsModal = false;
  }

  onAssetsAssigned(count: number) {
    // Refresh assets list to show newly assigned assets
    this.loadAssets();
    this.loadActivities(); // Refresh activities
    // Show success message (you can add a toast notification service if available)
    console.log(`${count} asset(s) assigned successfully`);
  }

  toggleAddAssetDropdown() {
    this.showAddAssetDropdown = !this.showAddAssetDropdown;
  }

  deleteLocation() {
    this.showDeleteConfirmationModal = true;
  }

  addSubLocation() {
    this.showAddSubLocationModal = true;
  }

  closeAddSubLocationModal() {
    this.showAddSubLocationModal = false;
  }

  onSubLocationCreated(subLocation: Location) {
    // Reload sublocations to get the updated list
    this.loadSubLocations();
    this.loadActivities(); // Refresh activities
    this.showAddSubLocationModal = false;
  }

  closeEditLocationModal() {
    this.showEditLocationModal = false;
    this.isEditingSubLocation = false;
    if (this.subLocation) {
      this.subLocation = null;
    }
  }

  onLocationUpdated(updatedLocation: Location) {
    console.log(updatedLocation, 'updated location')
    // Update the current location with the updated data

    this.location = updatedLocation;
    this.updateMockStats();
    this.loadActivities(); // Refresh activities
    this.showEditLocationModal = false;
  }

  onSubLocationUpdated() {
  this.loadSubLocations();
    this.showEditLocationModal = false;
  }

  closeDeleteConfirmationModal() {
    this.showDeleteConfirmationModal = false;
  }

  onLocationDeleted(deletedLocation: Location) {
    // Navigate back to locations list after successful deletion
    this.router.navigate(['/locations']);
  }

  onQRCodeError(event: any) {
    // Hide the broken image and show placeholder
    event.target.style.display = 'none';
    console.log('QR code image failed to load');
  }

  regenerateQR() {
    // TODO: Implement QR regeneration
    console.log('Regenerate QR code');
  }

  downloadQR() {
    if (this.location?.quick_chart_qr_url) {
      const link = document.createElement('a');
      link.href = this.location.quick_chart_qr_url;
      link.target = '_blank';
      link.download = `qr-code-${this.location.name.toLowerCase().replace(/\s+/g, '-')}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  printLabel() {
    if (this.location?.quick_chart_qr_url) {
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
         <html>
           <head>
             <title>Print Label</title>
             <style>
               body {
                 font-family: Arial, sans-serif;
                 text-align: center;
                 margin: 20px;
               }
               img {
                 max-width: 100%;
                 height: auto;
               }
                .info {
               margin-top: 15px;
               font-size: 14px;

             }
             .info strong {
               display: inline-block;
              margin: 0 auto;
               width: 120px;
             }
             </style>
           </head>
           <body>
             <h1>${this.location.name}</h1>
             <img src="${this.location.quick_chart_qr_url}" alt="QR Code for ${this.location.name}">
             <p>Scan this QR code to access location details.</p>

              <div class="info text-center">
             <p><strong>Branch:</strong> ${this.location.name}</p>
             <p><strong>Location ID:</strong> ${this.location.id}</p>
             <p><strong>Type:</strong> ${this.location.type.name}</p>
             <p><strong>Address:</strong> ${this.location.address}</p>
           </div>
             <script>
               window.onload = function() {
                setTimeout(() => {
                  window.print();
                  window.close();
                }, 200);
               };
             </script>
           </body>
         </html>
       `);
        printWindow.document.close();
      }
    } else {
      console.error('QR code URL is not available for printing.');
    }
  }

  loadActivities() {
    if (!this.location) return;

    this.activitiesLoading = true;
    this.locationService.getLocationActivities(this.location.id, { per_page: 10 })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.activities = response.data.activities || [];
          }
          this.activitiesLoading = false;
        },
        error: (error) => {
          console.error('Failed to load activities:', error);
          this.activitiesLoading = false;
        }
      });
  }

  getActivityIcon(action: string): string {
    const icons: { [key: string]: string } = {
      location_created: 'M12 4v16m8-8H4',
      sub_location_created: 'M12 4v16m8-8H4',
      location_updated: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
      location_deleted: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
      sub_location_deleted: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
      asset_assigned: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      asset_removed: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
    };
    return icons[action] || 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z';
  }

  getActivityColor(action: string): string {
    const colors: { [key: string]: string } = {
      location_created: 'green',
      sub_location_created: 'green',
      location_updated: 'blue',
      location_deleted: 'red',
      sub_location_deleted: 'red',
      asset_assigned: 'orange',
      asset_removed: 'orange'
    };
    return colors[action] || 'gray';
  }

  getActivityTitle(action: string, comment: string): string {
    // Use comment as title, or fallback to action-based title
    if (comment) {
      return comment;
    }
    const titles: { [key: string]: string } = {
      location_created: 'Location Created',
      sub_location_created: 'Sub-Location Added',
      location_updated: 'Location Updated',
      location_deleted: 'Location Deleted',
      sub_location_deleted: 'Sub-Location Removed',
      asset_assigned: 'Asset Assigned',
      asset_removed: 'Asset Removed'
    };
    return titles[action] || 'Activity';
  }

  formatTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return 'just now';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `about ${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 2592000) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else {
      const months = Math.floor(diffInSeconds / 2592000);
      return `${months} month${months !== 1 ? 's' : ''} ago`;
    }
  }

  viewSubLocation(subLocation: Location) {
    this.router.navigate(['/locations', subLocation.id]);
    setTimeout(() => {
      this.route.params
        .pipe(takeUntil(this.destroy$))
        .subscribe(params => {
          const locationId = params['id'];
          if (locationId) {
            this.loadLocation(parseInt(locationId));
          }
        });
    }, 500)
  }

  editSubLocation(subLocation: Location) {
    this.subLocation = subLocation;
    this.isEditingSubLocation = true;
    this.showEditLocationModal = true;
  }

  deleteSubLocation(subLocation: Location) {
    // TODO: Implement delete sublocation functionality
    console.log('Delete sublocation:', subLocation);
  }

  // Hierarchy expand/collapse methods
  toggleNode(nodeId: number) {
    if (this.expandedNodes.has(nodeId)) {
      this.expandedNodes.delete(nodeId);
    } else {
      this.expandedNodes.add(nodeId);
    }
  }

  isNodeExpanded(nodeId: number): boolean {
    return this.expandedNodes.has(nodeId);
  }

}
