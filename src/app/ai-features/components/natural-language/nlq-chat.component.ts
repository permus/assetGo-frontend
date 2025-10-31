import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit, OnDestroy, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';
import { ChatMessage } from '../../shared/natural-language.interface';
import { NaturalLanguageService } from '../../shared/natural-language.service';

@Component({
  selector: 'app-nlq-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="chat-container">
      <!-- Messages Area -->
      <div class="messages-area" #messagesContainer>
        <div *ngIf="messages.length === 0" class="empty-state">
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

        <div *ngFor="let message of messages" class="message" [ngClass]="'message-' + message.type">
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
            <div class="message-text" [innerHTML]="formatMessage(message.content)"></div>
            <div class="message-actions">
              <button class="action-button" (click)="copyMessage(message.content)" title="Copy message">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
            <div class="message-timestamp">{{ formatTime(message.timestamp) }}</div>
          </div>
        </div>

        <!-- Processing Indicator -->
        <div *ngIf="isProcessing" class="message message-assistant">
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
            [disabled]="isProcessing || needsApiKey || !hasContext"
            placeholder="Ask me anything about your assets..."
            class="message-input"
            rows="1">
          </textarea>
          <button
            (click)="sendMessage()"
            [disabled]="!currentMessage.trim() || isProcessing || needsApiKey || !hasContext"
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
  `,
  styleUrls: ['./nlq-chat.component.scss']
})
export class NLQChatComponent implements OnInit, OnDestroy {
  @Input() messages: ChatMessage[] = [];
  @Input() isProcessing: boolean = false;
  @Input() needsApiKey: boolean = false;
  @Input() hasContext: boolean = false;
  @Output() messageSent = new EventEmitter<string>();

  @ViewChild('messageInput') messageInput!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('messagesContainer') messagesContainer!: ElementRef<HTMLDivElement>;

  currentMessage: string = '';
  private destroy$ = new Subject<void>();

  constructor(
    private nlService: NaturalLanguageService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    // Auto-focus input on component init
    setTimeout(() => {
      if (this.messageInput) {
        this.messageInput.nativeElement.focus();
      }
    }, 100);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  sendMessage() {
    if (!this.currentMessage.trim() || this.isProcessing || this.needsApiKey || !this.hasContext) {
      return;
    }

    this.messageSent.emit(this.currentMessage.trim());
    this.currentMessage = '';
    this.autoResize();
  }

  copyMessage(content: string) {
    this.nlService.copyToClipboard(content).then(success => {
      if (success) {
        // Could show a toast notification here
        console.log('Message copied to clipboard');
      }
    });
  }

  formatMessage(content: string): SafeHtml {
    const formatted = this.nlService.formatMarkdown(content);
    const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, formatted);
    return this.sanitizer.bypassSecurityTrustHtml(sanitized || '');
  }

  formatTime(timestamp: string): string {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  private autoResize() {
    if (this.messageInput) {
      const textarea = this.messageInput.nativeElement;
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  }

  ngAfterViewChecked() {
    // Scroll to bottom when new messages are added
    if (this.messagesContainer) {
      const container = this.messagesContainer.nativeElement;
      container.scrollTop = container.scrollHeight;
    }
  }
}
