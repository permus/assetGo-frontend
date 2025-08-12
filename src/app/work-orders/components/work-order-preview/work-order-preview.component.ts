import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkOrderService, WorkOrderPreview, WorkOrderComment } from '../../services/work-order.service';
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
  commentForm: FormGroup;
  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workOrderService: WorkOrderService,
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
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadWorkOrder(id: string): void {
    this.isLoading = true;
    
    this.subscription.add(
      this.workOrderService.getWorkOrderById(id).subscribe({
        next: (workOrder) => {
          this.workOrder = workOrder;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading work order:', error);
          this.isLoading = false;
        }
      })
    );
  }

  goBack(): void {
    this.router.navigate(['/work-orders']);
  }

  startTimer(): void {
    this.isTimerRunning = true;
    // Timer logic would be implemented here
  }

  stopTimer(): void {
    this.isTimerRunning = false;
    // Timer stop logic would be implemented here
  }

  addComment(): void {
    if (this.commentForm.valid && this.workOrder) {
      const newComment: WorkOrderComment = {
        id: Date.now().toString(),
        text: this.commentForm.get('comment')?.value,
        author: 'omar@omeda.io', // This would come from auth service
        timestamp: new Date().toISOString()
      };

      if (!this.workOrder.comments) {
        this.workOrder.comments = [];
      }
      this.workOrder.comments.unshift(newComment);
      
      this.commentForm.reset();
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
      this.updateStatus(target.value);
    }
  }

  getStatusClass(status: string): string {
    const statusMap: { [key: string]: string } = {
      'open': 'status-open',
      'in-progress': 'status-in-progress',
      'completed': 'status-completed',
      'cancelled': 'status-cancelled'
    };
    return statusMap[status] || 'status-open';
  }

  getStatusLabel(status: string): string {
    const statusMap: { [key: string]: string } = {
      'open': 'Open',
      'in-progress': 'In Progress',
      'completed': 'Completed',
      'cancelled': 'Cancelled'
    };
    return statusMap[status] || status;
  }
}
