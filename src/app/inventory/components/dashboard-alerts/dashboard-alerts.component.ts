import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-alerts.component.html',
  styleUrls: ['./dashboard-alerts.component.scss']
})
export class DashboardAlertsComponent {
  constructor() { }
}
