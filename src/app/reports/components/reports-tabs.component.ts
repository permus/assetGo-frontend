import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportCategory } from '../models/reports.models';

interface Tab {
  id: ReportCategory;
  label: string;
  icon: string;
  count?: number;
  disabled?: boolean;
}

@Component({
  selector: 'app-reports-tabs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="reports-tabs">
      <div class="tabs-container">
        <div class="tabs-list">
          <button
            *ngFor="let tab of tabs"
            class="tab-button"
            [class.active]="tab.id === activeTab"
            [class.disabled]="tab.disabled"
            [disabled]="tab.disabled"
            (click)="onTabClick(tab)">
            
            <div class="tab-content">
              <svg 
                class="tab-icon" 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="2">
                <ng-container [ngSwitch]="tab.icon">
                  <!-- Package icon for assets -->
                  <g *ngSwitchCase="'package'">
                    <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </g>
                  
                  <!-- Wrench icon for maintenance -->
                  <g *ngSwitchCase="'wrench'">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </g>
                  
                  <!-- Box icon for inventory -->
                  <g *ngSwitchCase="'box'">
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8z"></path>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </g>
                  
                  <!-- Dollar sign icon for financial -->
                  <g *ngSwitchCase="'dollar-sign'">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </g>
                  
                  <!-- Settings icon for custom -->
                  <g *ngSwitchCase="'settings'">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </g>
                  
                  <!-- Default icon -->
                  <g *ngSwitchDefault>
                    <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3"></path>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </g>
                </ng-container>
              </svg>
              
              <span class="tab-label">{{ tab.label }}</span>
              
              <span 
                *ngIf="tab.count !== undefined" 
                class="tab-count"
                [class.has-count]="tab.count > 0">
                {{ tab.count }}
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./reports-tabs.component.scss']
})
export class ReportsTabsComponent {
  @Input() activeTab: ReportCategory = 'assets';
  @Input() tabs: Tab[] = [
    { id: 'assets', label: 'Asset Reports', icon: 'package' },
    { id: 'maintenance', label: 'Maintenance Reports', icon: 'wrench' },
    { id: 'inventory', label: 'Inventory Reports', icon: 'box' },
    { id: 'financial', label: 'Financial Reports', icon: 'dollar-sign' },
    { id: 'custom', label: 'Custom Reports', icon: 'settings' }
  ];

  @Output() tabChange = new EventEmitter<ReportCategory>();

  onTabClick(tab: Tab): void {
    if (!tab.disabled) {
      this.tabChange.emit(tab.id);
    }
  }
}
