import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asset-create',
  templateUrl: './asset-create.component.html',
  styleUrls: ['./asset-create.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class AssetCreateComponent {
  // Add form logic and properties here as needed
  healthScore = 85;
} 