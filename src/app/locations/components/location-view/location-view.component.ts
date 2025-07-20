import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LocationService, Location } from '../../services/location.service';
import { AddLocationModalComponent } from '../add-location-modal/add-location-modal.component';
import { EditLocationModalComponent } from '../edit-location-modal/edit-location-modal.component';
import { DeleteConfirmationModalComponent } from '../delete-confirmation-modal/delete-confirmation-modal.component';

@Component({
  selector: 'app-location-view',
  standalone: true,
  imports: [CommonModule, RouterModule, AddLocationModalComponent, EditLocationModalComponent, DeleteConfirmationModalComponent],
  templateUrl: './location-view.component.html',
  styleUrl: './location-view.component.scss'
})
export class LocationViewComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  location: Location | null = null;
  loading = true;
  error = '';
  
  // Sublocation data
  subLocations: Location[] = [];
  subLocationsLoading = false;
  
  // Modal state
  showAddSubLocationModal = false;
  showEditLocationModal = false;
  showDeleteConfirmationModal = false;
  
  // Mock data for demonstration
  mockStats = {
    totalAssets: 0,
    healthScore: 100,
    subLocations: 0,
    totalValue: 0
  };
  
  mockActivities = [
    {
      type: 'maintenance',
      title: 'Maintenance Scheduled',
      description: 'Routine maintenance scheduled for next week',
      time: 'about 2 hours ago',
      icon: 'maintenance'
    },
    {
      type: 'utilization',
      title: 'High Utilization',
      description: 'Location utilization increased by 15%',
      time: 'about 6 hours ago',
      icon: 'chart'
    },
    {
      type: 'safety',
      title: 'Safety Inspection',
      description: 'Monthly safety inspection completed',
      time: '1 day ago',
      icon: 'shield'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService
  ) {}

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
            this.updateMockStats();
            this.loadSubLocations();
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

  loadSubLocations() {
    if (!this.location) return;
    
    this.subLocationsLoading = true;
    
    const params = {
      parent_id: this.location.id,
      per_page: 50 // Load more sublocations
    };
    
    this.locationService.getLocations(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.subLocations = response.data.locations;
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

  updateMockStats() {
    if (this.location) {
      this.mockStats = {
        totalAssets: this.location.asset_summary?.asset_count || 0,
        healthScore: 100,
        subLocations: this.subLocations.length,
        totalValue: this.location.asset_summary?.total_value || 0
      };
    }
  }

  goBack() {
    this.router.navigate(['/locations']);
  }

  editLocation() {
    this.showEditLocationModal = true;
  }

  addAsset() {
    // TODO: Implement add asset functionality
    console.log('Add asset to location');
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
    this.showAddSubLocationModal = false;
  }

  closeEditLocationModal() {
    this.showEditLocationModal = false;
  }

  onLocationUpdated(updatedLocation: Location) {
    // Update the current location with the updated data
    this.location = updatedLocation;
    this.updateMockStats();
    this.showEditLocationModal = false;
  }

  closeDeleteConfirmationModal() {
    this.showDeleteConfirmationModal = false;
  }

  onLocationDeleted(deletedLocation: Location) {
    // Navigate back to locations list after successful deletion
    this.router.navigate(['/locations']);
  }

  regenerateQR() {
    // TODO: Implement QR regeneration
    console.log('Regenerate QR code');
  }

  downloadQR() {
    // TODO: Implement QR download
    console.log('Download QR code');
  }

  printLabel() {
    // TODO: Implement label printing
    console.log('Print label');
  }

  getActivityIcon(type: string): string {
    const icons: { [key: string]: string } = {
      maintenance: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      chart: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    };
    return icons[type] || icons['maintenance'];
  }

  getActivityColor(type: string): string {
    const colors: { [key: string]: string } = {
      maintenance: 'orange',
      chart: 'purple',
      shield: 'blue'
    };
    return colors[type] || 'gray';
  }

  viewSubLocation(subLocation: Location) {
    this.router.navigate(['/locations', subLocation.id]);
  }

  editSubLocation(subLocation: Location) {
    // TODO: Implement edit sublocation functionality
    console.log('Edit sublocation:', subLocation);
  }

  deleteSubLocation(subLocation: Location) {
    // TODO: Implement delete sublocation functionality
    console.log('Delete sublocation:', subLocation);
  }
}