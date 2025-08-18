import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkOrderService, WorkOrderPreview, WorkOrderComment, WorkOrderHistoryEvent } from '../../services/work-order.service';
import { MetaWorkOrdersService } from '../../../core/services/meta-work-orders.service';
import { MetaItem } from '../../../core/types/work-order.types';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-work-order-preview',
  standalone: false,
  templateUrl: './work-order-preview.component.html',
  styleUrls: ['./work-order-preview.component.scss']
})
export class WorkOrderPreviewComponent implements OnInit, OnDestroy {
  workOrder: WorkOrderPreview | null = null;
  isLoading = true;
  isTimerRunning = false;
  currentSession = {
    description: '',
    hourlyRate: 0
  };
  timeLogs: any[] = [];
  totalMinutes = 0;
  totalCost = 0;
  hasActiveSession = false;
  commentForm: FormGroup;
  private subscription = new Subscription();
  statusOptions: MetaItem[] = [];
  historyPreview: WorkOrderHistoryEvent[] = [];
  showHistoryModal = false;
  fullHistory: WorkOrderHistoryEvent[] = [];
  displayedElapsed = '00:00:00';
  private timerHandle: any = null;
  private activeStartTime?: Date;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workOrderService: WorkOrderService,
    private metaService: MetaWorkOrdersService,
    private fb: FormBuilder
  ) {
    this.commentForm = this.fb.group({
      comment: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const workOrderId = this.route.snapshot.paramMap.get('id');
    if (workOrderId) {
      this.loadWorkOrder(workOrderId);
    }

    // Load status options from API for the select list
    this.metaService.getStatus().subscribe({
      next: (statuses) => {
        this.statusOptions = statuses || [];
      },
      error: () => {
        this.statusOptions = [];
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.stopCountdown();
  }

  loadWorkOrder(id: string): void {
    this.isLoading = true;
    
    this.subscription.add(
      this.workOrderService.getWorkOrderById(id).subscribe({
        next: (workOrder) => {
          this.workOrder = workOrder;
          // Load existing comments from API to ensure consistent shape
          this.workOrderService.getComments(workOrder.id).subscribe({
            next: (comments) => {
              (this.workOrder as any).comments = comments;
            }
          });
          // Load history for preview and modal
          this.workOrderService.getWorkOrderHistory(workOrder.id).subscribe({
            next: (events) => {
              this.fullHistory = events || [];
              this.historyPreview = (events || []).slice(0, 3);
            }
          });
          // Load time logs
          this.workOrderService.getTimeLogs(workOrder.id).subscribe({
            next: (data) => {
              this.timeLogs = data.logs || [];
              this.totalMinutes = data.totals?.total_minutes || 0;
              this.totalCost = data.totals?.total_cost || 0;
              const active = this.timeLogs.find((l) => !l.end_time);
              this.hasActiveSession = !!active;
              if (active && active.start_time) {
                this.isTimerRunning = true;
                this.startCountdown(new Date(active.start_time));
              } else {
                this.isTimerRunning = false;
                this.stopCountdown();
              }
            }
          });
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading work order:', error);
          this.isLoading = false;
        }
      })
    );
  }

  openHistoryModal(): void {
    this.showHistoryModal = true;
  }

  closeHistoryModal(): void {
    this.showHistoryModal = false;
  }

  goBack(): void {
    this.router.navigate(['/work-orders']);
  }

  startTimer(): void {
    this.isTimerRunning = true;
    if (!this.workOrder) return;
    this.workOrderService.startTimer(this.workOrder.id, {
      description: this.currentSession.description || undefined,
      hourly_rate: this.currentSession.hourlyRate || undefined,
    }).subscribe({
      next: () => {
        const now = new Date();
        this.startCountdown(now);
        this.workOrderService.getTimeLogs(this.workOrder!.id).subscribe((data) => {
          this.timeLogs = data.logs || [];
          this.totalMinutes = data.totals?.total_minutes || 0;
          this.totalCost = data.totals?.total_cost || 0;
          this.hasActiveSession = this.timeLogs.some((l) => !l.end_time);
        });
      }
    });
  }

  stopTimer(): void {
    this.isTimerRunning = false;
    if (!this.workOrder) return;
    this.workOrderService.stopTimer(this.workOrder.id).subscribe({
      next: () => {
        this.stopCountdown();
        this.workOrderService.getTimeLogs(this.workOrder!.id).subscribe((data) => {
          this.timeLogs = data.logs || [];
          this.totalMinutes = data.totals?.total_minutes || 0;
          this.totalCost = data.totals?.total_cost || 0;
          this.hasActiveSession = this.timeLogs.some((l) => !l.end_time);
        });
      }
    });
  }

  addComment(): void {
    if (this.commentForm.valid && this.workOrder) {
      const text = this.commentForm.get('comment')?.value as string;
      this.workOrderService.addComment(this.workOrder.id, text).subscribe({
        next: (created) => {
          if (!this.workOrder!.comments) this.workOrder!.comments = [] as any;
          (this.workOrder!.comments as any).unshift(created);
          this.commentForm.reset();
        }
      });
    }
  }

  updateStatus(newStatus: string): void {
    if (this.workOrder) {
      this.workOrder.status = newStatus as any;
      // API call to update status would be implemented here
    }
  }

  onStatusChange(event: any): void {
    const target = event.target as HTMLSelectElement;
    if (target && target.value) {
      // Find status id by slug from meta API, then call update
      const slug = target.value;
      if (!this.workOrder) return;
      this.metaService.getStatus().subscribe({
        next: (statuses) => {
          const status = statuses.find((s) => s.slug === slug || s.slug === slug.replace('_', '-'));
          if (!status) return;
          this.workOrderService.updateWorkOrderStatus(this.workOrder!.id, status.id).subscribe({
            next: (updated) => {
              // Update local state and show current label
              this.workOrder = { ...(this.workOrder as any), status: updated.status } as any;
            }
          });
        }
      });
    }
  }

  private getStatusSlug(status: any): string {
    if (!status) return 'open';
    if (typeof status === 'string') return status;
    if (typeof status === 'object' && status !== null && 'slug' in status) {
      return (status as { slug: string }).slug;
    }
    return String(status);
  }

  getStatusClass(status: string | { id: number; name: string; slug: string } | undefined): string {
    const slug = this.getStatusSlug(status as any);
    const statusMap: { [key: string]: string } = {
      'open': 'status-open',
      'in-progress': 'status-in-progress',
      'in_progress': 'status-in-progress',
      'completed': 'status-completed',
      'cancelled': 'status-cancelled'
    };
    return statusMap[slug] || 'status-open';
  }

  getStatusLabel(status: string | { id: number; name: string; slug: string } | undefined): string {
    const slug = this.getStatusSlug(status as any);
    const statusMap: { [key: string]: string } = {
      'open': 'Open',
      'in-progress': 'In Progress',
      'in_progress': 'In Progress',
      'completed': 'Completed',
      'cancelled': 'Cancelled'
    };
    return statusMap[slug] || slug;
  }

  private getPrioritySlug(priority: any): string {
    if (!priority) return 'medium';
    if (typeof priority === 'string') return priority;
    if (typeof priority === 'object' && priority !== null && 'slug' in priority) {
      return (priority as { slug: string }).slug;
    }
    return String(priority);
  }

  getPriorityLabel(priority: string | { id: number; name: string; slug: string } | undefined): string {
    const slug = this.getPrioritySlug(priority as any);
    const map: { [key: string]: string } = {
      'low': 'Low',
      'medium': 'Medium',
      'high': 'High',
      'critical': 'Critical'
    };
    return map[slug] || slug;
  }

  private startCountdown(start: Date): void {
    this.activeStartTime = start;
    this.updateDisplayedElapsed();
    this.stopCountdown();
    this.timerHandle = setInterval(() => this.updateDisplayedElapsed(), 1000);
  }

  private stopCountdown(): void {
    if (this.timerHandle) {
      clearInterval(this.timerHandle);
      this.timerHandle = null;
    }
  }

  private updateDisplayedElapsed(): void {
    if (!this.activeStartTime) {
      this.displayedElapsed = '00:00:00';
      return;
    }
    const now = new Date().getTime();
    const start = this.activeStartTime.getTime();
    const diffSec = Math.max(0, Math.floor((now - start) / 1000));
    const hours = Math.floor(diffSec / 3600);
    const minutes = Math.floor((diffSec % 3600) / 60);
    const seconds = diffSec % 60;
    const pad = (n: number) => n.toString().padStart(2, '0');
    this.displayedElapsed = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
}
