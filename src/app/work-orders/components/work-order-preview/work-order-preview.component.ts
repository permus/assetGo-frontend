import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkOrderService, WorkOrderPreview, WorkOrderComment, WorkOrderHistoryEvent, WorkOrderAssignment } from '../../services/work-order.service';
import { TeamService, TeamMember } from '../../../teams/services/team.service';
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

  // Assignments UI state
  showAssignmentsModal = false;
  showEditModal = false;
  showAddPartsModal = false;
  showViewCostsModal = false;
  assignments: WorkOrderAssignment[] = [];
  teamMembers: TeamMember[] = [];
  selectedUserIds = new Set<number>();
  assignmentStatuses = new Map<number, string>();
  assignmentStatusOptions: Array<{ value: string; label: string }> = [
    { value: 'assigned', label: 'Assigned' },
    { value: 'accepted', label: 'Accepted' },
    { value: 'declined', label: 'Declined' },
    { value: 'completed', label: 'Completed' }
  ];

  openAssignmentsModal(): void {
    this.showAssignmentsModal = true;
  }

  closeAssignmentsModal(): void {
    this.showAssignmentsModal = false;
  }

  // Edit modal controls
  openEditModal(): void {
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }

  onWorkOrderUpdated(updated: any): void {
    this.workOrder = { ...(this.workOrder as any), ...updated } as any;
    this.showEditModal = false;
  }

  openAddPartsModal(): void { this.showAddPartsModal = true; }
  closeAddPartsModal(): void { this.showAddPartsModal = false; }
  onPartsAdded(): void { this.closeAddPartsModal(); }

  toggleUserSelection(userId: number, checked: boolean): void {
    if (checked) {
      this.selectedUserIds.add(userId);
    } else {
      this.selectedUserIds.delete(userId);
    }
  }

  saveAssignments(): void {
    if (!this.workOrder) return;
    const ids = Array.from(this.selectedUserIds.values());
    this.workOrderService.setAssignments(this.workOrder.id, ids).subscribe({
      next: (items) => {
        this.assignments = items || [];
        this.closeAssignmentsModal();
      }
    });
  }

  removeAssignment(a: WorkOrderAssignment): void {
    if (!this.workOrder) return;
    this.workOrderService.deleteAssignment(this.workOrder.id, a.id).subscribe({
      next: () => {
        this.assignments = (this.assignments || []).filter(x => x.id !== a.id);
        this.selectedUserIds.delete(a.user_id);
      }
    });
  }

  isUserAlreadyAssigned(userId: number): boolean {
    return (this.assignments || []).some(a => a.user_id === userId);
  }

  getAssignmentForUser(userId: number): WorkOrderAssignment | undefined {
    return (this.assignments || []).find(a => a.user_id === userId);
  }

  removeAssignmentByUser(userId: number): void {
    const a = this.getAssignmentForUser(userId);
    if (!a) return;
    this.removeAssignment(a);
  }

  onAssignmentStatusChange(a: WorkOrderAssignment, event: any): void {
    const target = event.target as HTMLSelectElement;
    if (!this.workOrder || !a || !target?.value) return;
    const newStatus = target.value;
    this.assignmentStatuses.set(a.id, newStatus);
    this.workOrderService.updateAssignmentStatus(this.workOrder.id, a.id, newStatus).subscribe({
      next: (updated) => {
        this.assignments = (this.assignments || []).map(x => x.id === updated.id ? { ...x, status: updated.status } as any : x);
        // Disable the select after status changes away from 'assigned'
        const shouldDisable = newStatus !== 'assigned';
        if (shouldDisable) {
          // No direct DOM refs; we rely on template binding to [disabled]
        }
      }
    });
  }

  getAssignmentStatusLabel(value: string | null | undefined): string {
    const v = (value || 'assigned').toLowerCase();
    const found = this.assignmentStatusOptions.find(o => o.value === v);
    return found ? found.label : v;
  }

  getAssignmentStatusClass(value: string | null | undefined): string {
    const v = (value || 'assigned').toLowerCase();
    switch (v) {
      case 'accepted':
        return 'pill-status accepted';
      case 'declined':
        return 'pill-status declined';
      case 'completed':
        return 'pill-status completed';
      default:
        return 'pill-status assigned';
    }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workOrderService: WorkOrderService,
    private metaService: MetaWorkOrdersService,
    private fb: FormBuilder,
    private teamService: TeamService
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
          // Load assignments
          this.workOrderService.getAssignments(workOrder.id).subscribe({
            next: (items) => {
              this.assignments = items || [];
              this.selectedUserIds = new Set((this.assignments || []).map(a => a.user_id));
              (this.assignments || []).forEach(a => {
                const status: string = (a as any).status || 'assigned';
                this.assignmentStatuses.set(a.id, status);
              });
            }
          });
          // Load team members for modal selection
          this.teamService.getTeamMembers().subscribe({
            next: (res: any) => {
              this.teamMembers = res?.data || [];
            },
            error: () => { this.teamMembers = []; }
          });
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
