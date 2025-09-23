import { Component } from '@angular/core';

@Component({
  selector: 'app-pm-header',
  standalone: true,
  template: `
    <div class="pm-header">
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs">
        <ol class="breadcrumb-list">
          <li class="breadcrumb-item">
            <a routerLink="/ai-features" class="breadcrumb-link">
              <svg class="breadcrumb-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"></path>
              </svg>
              AI Features
            </a>
          </li>
          <li class="breadcrumb-separator">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </li>
          <li class="breadcrumb-item active">
            <span class="breadcrumb-current">Predictive Maintenance</span>
          </li>
        </ol>
      </nav>

      <!-- Main Header -->
      <div class="header-content">
        <div class="header-main">
          <div class="header-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
          </div>
          <div class="header-text">
            <h1 class="header-title">Predictive Maintenance</h1>
            <p class="header-description">
              AI-powered failure prediction and maintenance optimization. 
              Get intelligent insights to prevent costly breakdowns and optimize your maintenance schedule.
            </p>
          </div>
        </div>
        
        <!-- AI Badge -->
        <div class="ai-badge">
          <svg class="ai-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"></path>
          </svg>
          <span class="ai-text">Powered by AI</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./pm-header.component.scss']
})
export class PMHeaderComponent {}
