import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgClass, AsyncPipe } from '@angular/common';
import { ToastService, Toast } from '../../../core/services/toast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, AsyncPipe],
  template: `
    <div class="fixed top-4 right-4 z-50 space-y-2 w-96">
      <div *ngFor="let toast of toasts$ | async"
           class="transform transition-all duration-300 ease-in-out rounded-lg shadow-lg p-4 flex items-start gap-3"
           [ngClass]="{
             'bg-green-50 border border-green-200': toast.type === 'success',
             'bg-red-50 border border-red-200': toast.type === 'error',
             'bg-yellow-50 border border-yellow-200': toast.type === 'warning',
             'bg-blue-50 border border-blue-200': toast.type === 'info'
           }">
        <!-- Icon -->
        <div class="flex-shrink-0">
          <!-- Success Icon -->
          <svg *ngIf="toast.type === 'success'" class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          
          <!-- Error Icon -->
          <svg *ngIf="toast.type === 'error'" class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
          
          <!-- Warning Icon -->
          <svg *ngIf="toast.type === 'warning'" class="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          
          <!-- Info Icon -->
          <svg *ngIf="toast.type === 'info'" class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>

        <!-- Message -->
        <div class="flex-1"
             [ngClass]="{
               'text-green-800': toast.type === 'success',
               'text-red-800': toast.type === 'error',
               'text-yellow-800': toast.type === 'warning',
               'text-blue-800': toast.type === 'info'
             }">
          <p class="text-sm font-medium">{{ toast.message }}</p>
        </div>

        <!-- Close Button -->
        <button (click)="toastService.remove(toast.id)"
                class="flex-shrink-0 rounded-md p-1 hover:bg-black hover:bg-opacity-5 transition-colors"
                [ngClass]="{
                  'text-green-600': toast.type === 'success',
                  'text-red-600': toast.type === 'error',
                  'text-yellow-600': toast.type === 'warning',
                  'text-blue-600': toast.type === 'info'
                }">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ToastComponent implements OnInit {
  toasts$: Observable<Toast[]>;

  constructor(public toastService: ToastService) {
    this.toasts$ = toastService.toasts$;
  }

  ngOnInit(): void {}
}

