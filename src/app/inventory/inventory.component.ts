import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  imports: [
    RouterLinkActive,
    RouterLink,
    RouterOutlet
  ],
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  constructor() { }
}
