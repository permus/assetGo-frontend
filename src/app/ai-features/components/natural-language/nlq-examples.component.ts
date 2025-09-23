import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleQuery, Category } from '../../shared/natural-language.interface';

@Component({
  selector: 'app-nlq-examples',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="examples-container">
      <div class="examples-header">
        <h3 class="examples-title">Example Queries</h3>
        <p class="examples-description">Click any example to get started</p>
      </div>

      <div class="examples-grid">
        <div 
          *ngFor="let example of examples" 
          class="example-card"
          [ngClass]="'category-' + example.category.toLowerCase()"
          (click)="selectExample(example)">
          <div class="example-header">
            <div class="example-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path [attr.d]="getIconPath(example.icon)"></path>
              </svg>
            </div>
            <div class="example-category" [ngClass]="'badge-' + example.category.toLowerCase()">
              {{ example.category }}
            </div>
          </div>
          <div class="example-content">
            <h4 class="example-title">{{ example.title }}</h4>
            <p class="example-description">{{ example.description }}</p>
          </div>
          <div class="example-query">
            "{{ example.query }}"
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./nlq-examples.component.scss']
})
export class NLQExamplesComponent {
  @Output() exampleSelected = new EventEmitter<string>();

  examples: ExampleQuery[] = [
    {
      id: '1',
      category: 'Maintenance',
      title: 'Overdue Maintenance',
      description: 'Find assets that need immediate attention',
      query: 'Show me all assets with overdue maintenance',
      icon: 'wrench'
    },
    {
      id: '2',
      category: 'Financial',
      title: 'Asset Costs',
      description: 'Analyze spending and budgets',
      query: 'What are my highest value assets and their maintenance costs?',
      icon: 'dollar-sign'
    },
    {
      id: '3',
      category: 'Analytics',
      title: 'Performance Trends',
      description: 'Get insights on asset performance',
      query: 'How are my assets performing this quarter compared to last?',
      icon: 'bar-chart-3'
    },
    {
      id: '4',
      category: 'Search',
      title: 'Find Assets',
      description: 'Locate specific assets or types',
      query: 'Find all HVAC units in Building A that are over 5 years old',
      icon: 'search'
    },
    {
      id: '5',
      category: 'Operations',
      title: 'Work Orders',
      description: 'Check work order status and priorities',
      query: 'What work orders are high priority and who is assigned to them?',
      icon: 'settings-2'
    },
    {
      id: '6',
      category: 'Maintenance',
      title: 'Maintenance Schedule',
      description: 'Plan upcoming maintenance',
      query: 'What maintenance is scheduled for next week?',
      icon: 'calendar'
    }
  ];

  selectExample(example: ExampleQuery) {
    this.exampleSelected.emit(example.query);
  }

  getIconPath(iconName: string): string {
    const icons: { [key: string]: string } = {
      'wrench': 'M22 7l-7.5-4.5L7 7l5.5 3.5L22 7zM7 7v10l5.5 3.5L18 17V7l-5.5 3.5L7 7z',
      'dollar-sign': 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
      'bar-chart-3': 'M3 3v18h18M18 17V9M13 17V5M8 17v-3',
      'search': 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      'settings-2': 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      'calendar': 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z'
    };
    return icons[iconName] || icons['search'];
  }
}
