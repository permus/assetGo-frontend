import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { 
  ChatMessage, 
  AssetContext, 
  NLQState, 
  ChatRequest 
} from '../../shared/natural-language.interface';
import { NaturalLanguageService } from '../../shared/natural-language.service';
import { NLQHeaderComponent } from './nlq-header.component';
import { NLQContextStripComponent } from './nlq-context-strip.component';
import { NLQChatComponent } from './nlq-chat.component';
import { NLQExamplesComponent } from './nlq-examples.component';
import { NLQCapabilitiesComponent } from './nlq-capabilities.component';

@Component({
  selector: 'app-natural-language',
  standalone: true,
  imports: [
    CommonModule,
    NLQHeaderComponent,
    NLQContextStripComponent,
    NLQChatComponent,
    NLQExamplesComponent,
    NLQCapabilitiesComponent
  ],
  template: `
    <div class="natural-language-page">
      <!-- Header -->
      <app-nlq-header [needsApiKey]="state.needsApiKey"></app-nlq-header>

      <!-- Context Strip -->
      <app-nlq-context-strip [context]="state.assetContext"></app-nlq-context-strip>

      <!-- Main Content -->
      <div class="main-content">
        <div class="chat-section">
          <app-nlq-chat
            [messages]="state.messages"
            [isProcessing]="state.isProcessing"
            [needsApiKey]="state.needsApiKey"
            (messageSent)="onMessageSent($event)">
          </app-nlq-chat>
        </div>

        <div class="sidebar">
          <!-- Examples -->
          <app-nlq-examples (exampleSelected)="onExampleSelected($event)"></app-nlq-examples>

          <!-- Capabilities -->
          <app-nlq-capabilities></app-nlq-capabilities>
        </div>
      </div>

      <!-- Error State -->
      <div *ngIf="errorMessage" class="error-state">
        <div class="error-content">
          <svg class="error-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <h3 class="error-title">Something went wrong</h3>
          <p class="error-description">{{ errorMessage }}</p>
          <button class="retry-button" (click)="retry()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M3 21v-5h5"></path>
            </svg>
            Try Again
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./natural-language.component.scss']
})
export class NaturalLanguageComponent implements OnInit, OnDestroy {
  @ViewChild('chatComponent') chatComponent!: NLQChatComponent;

  state: NLQState = {
    query: '',
    messages: [],
    isProcessing: false,
    assetContext: null,
    needsApiKey: false
  };

  errorMessage: string | null = null;
  private destroy$ = new Subject<void>();

  constructor(private nlService: NaturalLanguageService) {}

  ngOnInit() {
    this.loadContext();
    this.checkApiKey();
  }

  ngOnDestroy() {
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
          } else {
            this.errorMessage = response.error || 'Failed to load context';
          }
        },
        error: (error) => {
          console.error('Error loading context:', error);
          this.errorMessage = 'Failed to load context. Please try again.';
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

  onMessageSent(message: string) {
    if (!message.trim() || this.state.isProcessing || this.state.needsApiKey) {
      return;
    }

    // Add user message
    const userMessage: ChatMessage = {
      type: 'user',
      content: message,
      timestamp: new Date().toISOString()
    };

    this.state.messages.push(userMessage);
    this.state.isProcessing = true;
    this.errorMessage = null;

    // Prepare chat request
    const chatRequest: ChatRequest = {
      messages: this.state.messages.map(msg => ({
        role: msg.type as 'user' | 'assistant',
        content: msg.content
      })),
      assetContext: this.state.assetContext!,
      companyContext: {
        name: 'Your Company' // This could be dynamic
      }
    };

    // Send to AI
    this.nlService.chat(chatRequest)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.reply) {
            // Add assistant message
            const assistantMessage: ChatMessage = {
              type: 'assistant',
              content: response.reply,
              timestamp: new Date().toISOString()
            };
            this.state.messages.push(assistantMessage);
          } else {
            this.errorMessage = response.error || 'Failed to get response from AI';
          }
          this.state.isProcessing = false;
        },
        error: (error) => {
          console.error('Error sending message:', error);
          this.errorMessage = 'Failed to send message. Please try again.';
          this.state.isProcessing = false;
        }
      });
  }

  onExampleSelected(query: string) {
    // This will trigger the message sent event
    this.onMessageSent(query);
  }

  retry() {
    this.errorMessage = null;
    this.loadContext();
    this.checkApiKey();
  }
}
