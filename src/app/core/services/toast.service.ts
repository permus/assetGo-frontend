import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  public toasts$: Observable<Toast[]> = this.toastsSubject.asObservable();

  /**
   * Show a success toast
   */
  success(message: string, duration: number = 5000): void {
    this.show('success', message, duration);
  }

  /**
   * Show an error toast
   */
  error(message: string, duration: number = 7000): void {
    this.show('error', message, duration);
  }

  /**
   * Show a warning toast
   */
  warning(message: string, duration: number = 6000): void {
    this.show('warning', message, duration);
  }

  /**
   * Show an info toast
   */
  info(message: string, duration: number = 5000): void {
    this.show('info', message, duration);
  }

  /**
   * Show a toast notification
   */
  private show(type: Toast['type'], message: string, duration: number): void {
    const toast: Toast = {
      id: this.generateId(),
      type,
      message,
      duration
    };

    const current = this.toastsSubject.value;
    this.toastsSubject.next([...current, toast]);

    // Auto-dismiss after duration
    if (duration > 0) {
      setTimeout(() => {
        this.remove(toast.id);
      }, duration);
    }
  }

  /**
   * Remove a specific toast
   */
  remove(id: string): void {
    const current = this.toastsSubject.value;
    this.toastsSubject.next(current.filter(t => t.id !== id));
  }

  /**
   * Clear all toasts
   */
  clear(): void {
    this.toastsSubject.next([]);
  }

  /**
   * Generate unique ID for toast
   */
  private generateId(): string {
    return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}

