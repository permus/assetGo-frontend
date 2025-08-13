import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPartModalComponent } from '../add-part-modal/add-part-modal.component';

@Component({
  selector: 'app-parts-catalog',
  standalone: true,
  imports: [CommonModule, AddPartModalComponent],
  templateUrl: './parts-catalog.component.html',
  styleUrls: ['./parts-catalog.component.scss']
})
export class PartsCatalogComponent {
  showAddPartModal = false;

  openAddPartModal(): void {
    this.showAddPartModal = true;
  }

  closeAddPartModal(): void {
    this.showAddPartModal = false;
  }

  onCreatePart(partData: any): void {
    console.log('New part data:', partData);
    // Here you would typically send the data to your service
    // this.partsService.createPart(partData).subscribe(...)
    
    // Close the modal after successful creation
    this.closeAddPartModal();
  }
}
