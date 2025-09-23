import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Capability } from '../../shared/natural-language.interface';

@Component({
  selector: 'app-nlq-capabilities',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="capabilities-container">
      <div class="capabilities-header">
        <h3 class="capabilities-title">AI Capabilities</h3>
        <p class="capabilities-description">What I can help you with</p>
      </div>

      <div class="capabilities-grid">
        <div 
          *ngFor="let capability of capabilities" 
          class="capability-card"
          [ngClass]="'capability-' + capability.id">
          <div class="capability-icon" [ngClass]="'icon-' + capability.color">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path [attr.d]="getIconPath(capability.icon)"></path>
            </svg>
          </div>
          <div class="capability-content">
            <h4 class="capability-title">{{ capability.title }}</h4>
            <p class="capability-description">{{ capability.description }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./nlq-capabilities.component.scss']
})
export class NLQCapabilitiesComponent {
  capabilities: Capability[] = [
    {
      id: 'search',
      title: 'Search & Filter',
      description: 'Find assets, work orders, and data using natural language',
      icon: 'search',
      color: 'blue'
    },
    {
      id: 'financial',
      title: 'Financial Analysis',
      description: 'Analyze costs, budgets, and financial performance',
      icon: 'dollar-sign',
      color: 'green'
    },
    {
      id: 'maintenance',
      title: 'Maintenance Planning',
      description: 'Schedule, track, and optimize maintenance activities',
      icon: 'wrench',
      color: 'purple'
    },
    {
      id: 'analytics',
      title: 'Data Analytics',
      description: 'Get insights from your asset data and trends',
      icon: 'bar-chart-3',
      color: 'orange'
    },
    {
      id: 'reports',
      title: 'Smart Reports',
      description: 'Generate detailed reports and summaries',
      icon: 'file-text',
      color: 'red'
    },
    {
      id: 'recommendations',
      title: 'Recommendations',
      description: 'Get AI-powered suggestions and best practices',
      icon: 'lightbulb',
      color: 'indigo'
    }
  ];

  getIconPath(iconName: string): string {
    const icons: { [key: string]: string } = {
      'search': 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      'dollar-sign': 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
      'wrench': 'M22 7l-7.5-4.5L7 7l5.5 3.5L22 7zM7 7v10l5.5 3.5L18 17V7l-5.5 3.5L7 7z',
      'bar-chart-3': 'M3 3v18h18M18 17V9M13 17V5M8 17v-3',
      'file-text': 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
      'lightbulb': 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z'
    };
    return icons[iconName] || icons['search'];
  }
}
