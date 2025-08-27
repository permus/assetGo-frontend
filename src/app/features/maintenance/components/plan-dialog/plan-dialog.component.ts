import { Component, EventEmitter, Input, Output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaintenanceService } from '../../maintenance.service';
import { MaintenancePlan, MaintenancePlanChecklist, FrequencyType, FrequencyUnit, PlanType } from '../../models';

@Component({
  selector: 'app-plan-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: 'plan-dialog.scss',
  templateUrl: 'plan-dialog.html',
})
export class PlanDialogComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();
  @Output() created = new EventEmitter<any>();

  steps = ['Basic Info', 'Assets', 'Checklist', 'Schedule'];
  step = signal(0);
  loading = false;
  error: string | null = null;

  model: MaintenancePlan & { checklist_items: MaintenancePlanChecklist[] } = {
    name: '',
    priority_id: undefined,
    sort: 0,
    descriptions: '',
    category_id: undefined,
    plan_type: 'preventive' as PlanType,
    estimeted_duration: undefined,
    instractions: '',
    safety_notes: '',
    asset_ids: [],
    frequency_type: 'time' as FrequencyType,
    frequency_value: 30,
    frequency_unit: 'days' as FrequencyUnit,
    is_active: true,
    checklist_items: [],
  };

  items = signal<MaintenancePlanChecklist[]>([]);
  assetIdsCsv = signal('');

  constructor(private api: MaintenanceService) {}

  go(i: number) { this.step.set(i); }
  next() { if (this.step()<3) this.step.set(this.step()+1); }
  prev() { if (this.step()>0) this.step.set(this.step()-1); }

  onBackdrop(e: MouseEvent) { this.close(); }
  close() { this.closed.emit(); this.reset(); }

  addItem() {
    const order = this.items().length;
    this.items.set([...this.items(), { title: '', type: 'checkbox', order, is_required: false, is_safety_critical: false, is_photo_required: false }]);
  }
  removeItem(i: number) {
    const list = [...this.items()];
    list.splice(i,1);
    this.items.set(list.map((it, idx) => ({ ...it, order: idx })));
  }

  setAssetIdsCsv(v: string) {
    this.assetIdsCsv.set(v);
    const ids = v.split(',').map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n));
    this.model.asset_ids = ids;
  }

  canSubmit() {
    const hasChecklist = this.items().length > 0;
    const hasName = !!this.model.name && this.model.name.trim().length > 0;
    if (this.model.frequency_type === 'time') {
      return hasChecklist && hasName && !!this.model.frequency_value && !!this.model.frequency_unit;
    }
    return hasChecklist && hasName;
  }

  submit() {
    if (!this.canSubmit()) return;
    this.loading = true;
    this.error = null;
    const payload = { ...this.model, checklist_items: this.items().map((it, idx) => ({ ...it, order: it.order ?? idx })) };
    this.api.createPlan(payload).subscribe({
      next: (res) => {
        this.loading = false;
        this.created.emit(res);
        this.close();
      },
      error: (err) => {
        this.loading = false;
        const msg = err?.error?.message || 'Failed to create plan';
        this.error = msg;
      }
    });
  }

  private reset() {
    this.step.set(0);
    this.model = {
      name: '', priority_id: undefined, sort: 0, descriptions: '', category_id: undefined,
      plan_type: 'preventive', estimeted_duration: undefined, instractions: '', safety_notes: '',
      asset_ids: [], frequency_type: 'time', frequency_value: 30, frequency_unit: 'days', is_active: true, checklist_items: []
    } as any;
    this.items.set([]);
    this.assetIdsCsv.set('');
    this.error = null;
    this.loading = false;
  }
}


