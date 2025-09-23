import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nlq-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="nlq-header">
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
            <span class="breadcrumb-current">Natural Language</span>
          </li>
        </ol>
      </nav>

      <!-- Main Header -->
      <div class="header-content">
        <div class="header-main">
          <div class="header-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              <path d="M13 8H7"></path>
              <path d="M17 12H7"></path>
            </svg>
          </div>
          <div class="header-text">
            <h1 class="header-title">Natural Language Queries</h1>
            <p class="header-description">
              Ask questions about your assets in plain English and get AI-powered answers. 
              Get insights on maintenance, costs, performance, and more.
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

      <!-- API Key Warning Banner -->
      <div *ngIf="needsApiKey" class="api-key-banner">
        <div class="banner-content">
          <svg class="banner-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <div class="banner-text">
            <h3 class="banner-title">OpenAI API Key Required</h3>
            <p class="banner-description">
              To use Natural Language Queries, please configure your OpenAI API key in the system settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./nlq-header.component.scss']
})
export class NLQHeaderComponent {
  @Input() needsApiKey: boolean = false;
}
