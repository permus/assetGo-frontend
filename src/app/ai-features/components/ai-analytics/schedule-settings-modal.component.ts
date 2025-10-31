import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ScheduleSettings } from '../../shared/ai-analytics.interface';
import { AIAnalyticsService } from '../../shared/ai-analytics.service';

@Component({
  selector: 'app-schedule-settings-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Modal Backdrop -->
    <div *ngIf="isOpen"
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" style="background-color: #0000008f"
         (click)="closeModalHandler()">
      <!-- Modal Container -->
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full"
           (click)="$event.stopPropagation()">

        <!-- Modal Header -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 class="text-xl font-semibold text-gray-900">Schedule Analytics Updates</h2>
          </div>
          <button
            (click)="closeModalHandler()"
            class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <div class="p-6">
          <div *ngIf="isLoading" class="text-center py-8">
            <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p class="mt-4 text-gray-600">Loading schedule settings...</p>
          </div>

          <form *ngIf="!isLoading" (ngSubmit)="onSave($event)" class="space-y-6">
            <!-- Enable/Disable Toggle -->
            <div class="flex items-center justify-between">
              <div>
                <label class="text-sm font-medium text-gray-900">Enable Scheduled Updates</label>
                <p class="text-xs text-gray-500 mt-1">Automatically generate analytics reports</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" [(ngModel)]="settings.enabled" name="enabled" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <!-- Frequency Selection -->
            <div *ngIf="settings.enabled">
              <label class="block text-sm font-medium text-gray-900 mb-2">Frequency</label>
              <select [(ngModel)]="settings.frequency" name="frequency"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
              <p class="text-xs text-gray-500 mt-1">How often to generate new analytics</p>
            </div>

            <!-- Hour Selection -->
            <div *ngIf="settings.enabled">
              <label class="block text-sm font-medium text-gray-900 mb-2">Run Time (UTC)</label>
              <select [(ngModel)]="settings.hourUTC" name="hourUTC"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option *ngFor="let hour of hours" [value]="hour">{{ formatHour(hour) }}</option>
              </select>
              <p class="text-xs text-gray-500 mt-1">Time of day to run analytics generation (UTC)</p>
            </div>

            <!-- Error Message -->
            <div *ngIf="errorMessage" class="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p class="text-sm text-red-600">{{ errorMessage }}</p>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-end space-x-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                (click)="closeModalHandler()"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Cancel
              </button>
              <button
                type="submit"
                [disabled]="isSaving"
                class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">
                <span *ngIf="!isSaving">Save Settings</span>
                <span *ngIf="isSaving">Saving...</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ScheduleSettingsModalComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() settingsUpdated = new EventEmitter<void>();

  settings: ScheduleSettings = {
    enabled: false,
    frequency: 'daily',
    hourUTC: 0
  };

  isLoading = false;
  isSaving = false;
  errorMessage: string | null = null;
  hours: number[] = Array.from({ length: 24 }, (_, i) => i);
  private destroy$ = new Subject<void>();

  constructor(private analyticsService: AIAnalyticsService) {}

  ngOnInit() {
    // Component initialized
  }

  ngOnChanges(changes: SimpleChanges) {
    // Load settings when modal opens
    if (changes['isOpen'] && this.isOpen) {
      this.loadSettings();
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadSettings() {
    this.isLoading = true;
    this.errorMessage = null;

    this.analyticsService.getScheduleSettings()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.settings = {
              enabled: response.data.enabled ?? false,
              frequency: response.data.frequency ?? 'daily',
              hourUTC: response.data.hourUTC ?? 0
            };
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading schedule settings:', error);
          this.errorMessage = 'Failed to load schedule settings. Please try again.';
          this.isLoading = false;
        }
      });
  }

  onSave(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.isSaving = true;
    this.errorMessage = null;

    this.analyticsService.updateScheduleSettings(this.settings)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.settingsUpdated.emit();
            this.closeModalHandler();
          } else {
            this.errorMessage = response.error || 'Failed to save settings.';
          }
          this.isSaving = false;
        },
        error: (error) => {
          console.error('Error saving schedule settings:', error);
          this.errorMessage = 'Failed to save schedule settings. Please try again.';
          this.isSaving = false;
        }
      });
  }

  formatHour(hour: number): string {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:00 ${period} (UTC ${hour}:00)`;
  }

  closeModalHandler() {
    this.isOpen = false;
    this.errorMessage = null;
    this.closeModal.emit();
  }
}

