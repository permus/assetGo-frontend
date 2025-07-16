import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: false
})
export class DashboardComponent {
  user = {
    name: 'omar',
    role: 'Company Admin',
    company: 'Omeda'
  };

  stats = [
    { title: 'Total Assets', value: '24', subtitle: 'Live data', icon: 'info', color: 'blue' },
    { title: 'Active Assets', value: '23', subtitle: '95.8% operational', icon: 'check', color: 'green' },
    { title: 'Critical Alerts', value: '1', subtitle: '1 require immediate attention', icon: 'warning', color: 'orange' },
    { title: 'Monthly Investment', value: '$0', subtitle: 'No data available', icon: 'dollar', color: 'purple' },
    { title: 'Asset Utilization', value: '--', subtitle: 'No data available', icon: 'trending', color: 'blue' },
    { title: 'Scheduled Maintenance', value: '0', subtitle: 'Next 30 days', icon: 'clock', color: 'teal' },
    { title: 'Active Work Orders', value: '2', subtitle: '1 high priority', icon: 'clipboard', color: 'yellow' },
    { title: 'Compliance Score', value: '--', subtitle: 'No data available', icon: 'shield', color: 'green' }
  ];

  workOrders = [
    { title: 'Total Work Orders', value: 2 },
    { title: 'Scheduled This Week', value: 0 },
    { title: 'Overdue', value: 1 }
  ];
}
