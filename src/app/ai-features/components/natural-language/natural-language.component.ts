import { Component, OnInit, OnDestroy, ViewChild, ElementRef, SecurityContext, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  ChatMessage,
  AssetContext,
  NLQState,
  ChatRequest,
  ExampleQuery,
  Capability,
  Category
} from '../../shared/natural-language.interface';
import { NaturalLanguageService } from '../../shared/natural-language.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-natural-language',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  template: `
    <div class="natural-language-page">
      <!-- Header -->
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
        <div *ngIf="state.needsApiKey" class="api-key-banner">
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

      <!-- Context Strip -->
      <div class="context-strip">
        <div class="context-content" *ngIf="state.assetContext; else loadingTemplate">
          <div class="context-title">
            <svg class="context-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <span>Current Context</span>
          </div>
          
          <div class="context-stats">
            <div class="stat-item">
              <svg class="stat-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              <span class="stat-value">{{ state.assetContext.totalAssets }}</span>
              <span class="stat-label">Assets</span>
            </div>

            <div class="stat-item">
              <svg class="stat-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.5 0 2.91.37 4.15 1.02"></path>
              </svg>
              <span class="stat-value">{{ state.assetContext.activeAssets }}</span>
              <span class="stat-label">Active</span>
            </div>

            <div class="stat-item">
              <svg class="stat-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
              <span class="stat-value">{{ state.assetContext.openWorkOrders }}</span>
              <span class="stat-label">Open WOs</span>
            </div>

            <div class="stat-item">
              <svg class="stat-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span class="stat-value">{{ state.assetContext.totalLocations }}</span>
              <span class="stat-label">Locations</span>
            </div>

            <div class="stat-item" *ngIf="state.assetContext.overdueMaintenance > 0">
              <svg class="stat-icon warning" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <span class="stat-value warning">{{ state.assetContext.overdueMaintenance }}</span>
              <span class="stat-label">Need Maintenance</span>
            </div>
          </div>
        </div>

        <ng-template #loadingTemplate>
          <div class="context-loading">
            <div class="loading-skeleton">
              <div class="skeleton-line w-24"></div>
              <div class="skeleton-line w-32"></div>
              <div class="skeleton-line w-28"></div>
              <div class="skeleton-line w-20"></div>
            </div>
          </div>
        </ng-template>
      </div>

      <!-- Main Content -->
      <div class="main-content">
        <div class="chat-section">
          <!-- Chat Container -->
          <div class="chat-container">
            <!-- Messages Area -->
            <div class="messages-area" #messagesContainer>
              <div *ngIf="state.messages.length === 0" class="empty-state">
                <div class="empty-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    <path d="M13 8H7"></path>
                    <path d="M17 12H7"></path>
                  </svg>
                </div>
                <h3 class="empty-title">Start a Conversation</h3>
                <p class="empty-description">
                  Ask me anything about your assets, maintenance, work orders, or operations.
                  I can help you analyze data, find information, and get insights.
                </p>
              </div>

              <div *ngFor="let message of state.messages; trackBy: trackByMessage" class="message" [ngClass]="'message-' + message.type">
                <div class="message-avatar">
                  <svg *ngIf="message.type === 'assistant'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"></path>
                  </svg>
                  <svg *ngIf="message.type === 'user'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="message-content">
                  <div class="message-text" [innerHTML]="message.formattedContent || formatMessage(message.content)"></div>
                  <div class="message-actions">
                    <button class="action-button" (click)="copyMessage(message.content)" title="Copy message">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Processing Indicator -->
              <div *ngIf="state.isProcessing" class="message message-assistant">
                <div class="message-avatar">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 0-7-2-7-5V6c0-3 2-5 7-5s7 2 7 5v8c0 3-2 5-7 5zM15 13l3 3-3 3"></path>
                  </svg>
                </div>
                <div class="message-content">
                  <div class="processing-indicator">
                    <div class="processing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span class="processing-text">AI is thinking...</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Input Area -->
            <div class="input-area">
              <div class="input-container">
                <textarea
                  #messageInput
                  [(ngModel)]="currentMessage"
                  (keydown)="onKeyDown($event)"
                  [disabled]="state.isProcessing || state.needsApiKey || !state.hasContext"
                  placeholder="Ask me anything about your assets..."
                  class="message-input"
                  rows="1">
                </textarea>
                <button
                  (click)="sendMessage()"
                  [disabled]="!currentMessage.trim() || state.isProcessing || state.needsApiKey || !state.hasContext"
                  class="send-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                  </svg>
                </button>
              </div>
              <div class="input-hint">
                Press Enter to send, Shift+Enter for new line
              </div>
            </div>
          </div>
        </div>

        <div class="sidebar">
          <!-- Examples -->
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

          <!-- Capabilities -->
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
        </div>
      </div>

      <!-- Error Banner -->
      <div *ngIf="errorMessage" class="error-banner">
        <div class="error-banner-content">
          <div class="error-banner-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <div class="error-banner-text">
            <span class="error-banner-message">{{ errorMessage }}</span>
          </div>
          <div class="error-banner-actions">
            <button class="error-banner-retry" (click)="retry()" title="Retry">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                <path d="M21 3v5h-5"></path>
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                <path d="M3 21v-5h5"></path>
              </svg>
            </button>
            <button class="error-banner-dismiss" (click)="dismissError()" title="Dismiss">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./natural-language.component.scss']
})
export class NaturalLanguageComponent implements OnInit, OnDestroy {
  @ViewChild('messageInput') messageInput!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('messagesContainer') messagesContainer!: ElementRef<HTMLDivElement>;

  state: NLQState = {
    query: '',
    messages: [],
    isProcessing: false,
    assetContext: null,
    needsApiKey: false,
    hasContext: false
  };

  errorMessage: string | null = null;
  companyName: string = 'Your Company';
  currentMessage: string = '';
  private destroy$ = new Subject<void>();
  private formattedMessagesCache: Map<string, SafeHtml> = new Map();
  private scrollTimeout: any = null;

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

  constructor(
    private nlService: NaturalLanguageService,
    private authService: AuthService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Set hasContext to true by default - backend will auto-fetch context anyway
    // This allows users to interact immediately, even if context endpoint is slow
    this.state.hasContext = true;

    // Load context in background (non-blocking)
    this.loadContext();
    this.checkApiKey();

    // Auto-focus input on component init
    setTimeout(() => {
      if (this.messageInput) {
        this.messageInput.nativeElement.focus();
      }
    }, 100);
  }

  ngOnDestroy() {
    // Clear any pending scroll timeouts
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    // Clear cache
    this.formattedMessagesCache.clear();
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadContext() {
    this.nlService.getContext()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.state.assetContext = response.data;
            // Keep hasContext true - we already set it to true in ngOnInit
            // This ensures users can interact even if context endpoint is slow
          } else {
            // Don't block interaction if context fails - backend will handle it
            console.warn('Context load failed, but continuing anyway:', response.error);
          }
        },
        error: (error) => {
          console.error('Error loading context:', error);
          // Don't block interaction - backend will auto-fetch context when needed
        }
      });
  }

  checkApiKey() {
    this.nlService.checkApiKey()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.state.needsApiKey = !response.hasApiKey;
        },
        error: (error) => {
          console.error('Error checking API key:', error);
          this.state.needsApiKey = true;
        }
      });
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  sendMessage() {
    if (!this.currentMessage.trim() || this.state.isProcessing || this.state.needsApiKey || !this.state.hasContext) {
      return;
    }

    // Set processing flag FIRST to prevent race conditions
    this.state.isProcessing = true;
    this.errorMessage = null;

    // Create user message with pre-formatted content
    const messageContent = this.currentMessage.trim();
    const userMessage: ChatMessage = {
      type: 'user',
      content: messageContent,
      formattedContent: this.formatMessage(messageContent)
    };

    // Use immutable update - create new array instead of mutating
    this.state.messages = [...this.state.messages, userMessage];
    
    // Schedule scroll (debounce multiple rapid updates)
    this.scheduleScroll();

    // Prepare chat request - backend will automatically fetch assetContext and companyContext
    const chatRequest: ChatRequest = {
      messages: this.state.messages.map((msg: ChatMessage) => ({
        role: msg.type as 'user' | 'assistant',
        content: msg.content
      }))
    };

    // Clear input and resize
    this.currentMessage = '';
    this.autoResize();

    // Send to AI
    this.nlService.chat(chatRequest)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.reply) {
            // Add assistant message with pre-formatted content
            const assistantMessage: ChatMessage = {
              type: 'assistant',
              content: response.reply,
              formattedContent: this.formatMessage(response.reply)
            };
            this.state.messages = [...this.state.messages, assistantMessage];
            
            // Schedule scroll (debounce multiple rapid updates)
            this.scheduleScroll();
          } else {
            this.errorMessage = response.error || 'Failed to get response from AI';
          }
          this.state.isProcessing = false;
        },
        error: (error) => {
          console.error('Error sending message:', error);

          // Handle timeout errors specifically
          if (error.message && error.message.includes('timed out')) {
            this.errorMessage = 'Request timed out. The server is taking too long to respond. Please try again.';
          } else if (error.error?.error) {
            this.errorMessage = error.error.error || 'Failed to send message. Please try again.';
          } else {
            this.errorMessage = 'Failed to send message. Please try again.';
          }

          // Always clear processing state on error
          this.state.isProcessing = false;
        }
      });
  }

  selectExample(example: ExampleQuery) {
    this.currentMessage = example.query;
    this.sendMessage();
  }

  copyMessage(content: string) {
    this.nlService.copyToClipboard(content).then(success => {
      if (success) {
        console.log('Message copied to clipboard');
      }
    });
  }

  formatMessage(content: string): SafeHtml {
    // Cache formatted messages to avoid expensive re-computation
    if (this.formattedMessagesCache.has(content)) {
      return this.formattedMessagesCache.get(content)!;
    }
    
    const formatted = this.nlService.formatMarkdown(content);
    const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, formatted);
    const safeHtml = this.sanitizer.bypassSecurityTrustHtml(sanitized || '');
    
    // Cache the result (limit cache size to prevent memory issues)
    if (this.formattedMessagesCache.size > 100) {
      const firstKey = this.formattedMessagesCache.keys().next().value;
      if (firstKey) {
        this.formattedMessagesCache.delete(firstKey);
      }
    }
    this.formattedMessagesCache.set(content, safeHtml);
    
    return safeHtml;
  }

  getIconPath(iconName: string): string {
    const icons: { [key: string]: string } = {
      'wrench': 'M22 7l-7.5-4.5L7 7l5.5 3.5L22 7zM7 7v10l5.5 3.5L18 17V7l-5.5 3.5L7 7z',
      'dollar-sign': 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
      'bar-chart-3': 'M3 3v18h18M18 17V9M13 17V5M8 17v-3',
      'search': 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
      'settings-2': 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      'calendar': 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
      'file-text': 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
      'lightbulb': 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z'
    };
    return icons[iconName] || icons['search'];
  }

  trackByMessage(index: number, message: ChatMessage): string {
    // Use index and content hash as unique identifier
    return `${index}-${message.type}-${message.content.substring(0, 20)}`;
  }

  private autoResize() {
    if (this.messageInput) {
      const textarea = this.messageInput.nativeElement;
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  }

  private scheduleScroll() {
    // Debounce scroll calls to avoid excessive DOM operations
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    this.scrollTimeout = setTimeout(() => {
      this.scrollToBottom();
      this.scrollTimeout = null;
    }, 50);
  }

  private scrollToBottom() {
    if (!this.messagesContainer) {
      return;
    }
    
    const container = this.messagesContainer.nativeElement;
    const isNearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
    
    // Only auto-scroll if user is near the bottom (within 100px)
    if (isNearBottom) {
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        if (this.messagesContainer) {
          this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
        }
      });
    }
  }

  retry() {
    this.errorMessage = null;
    this.loadContext();
    this.checkApiKey();
  }

  dismissError() {
    this.errorMessage = null;
  }
}
