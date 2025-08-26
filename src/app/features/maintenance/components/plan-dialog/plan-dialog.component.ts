import { Component, EventEmitter, Input, Output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaintenanceService } from '../../maintenance.service';
import { MaintenancePlan, MaintenancePlanChecklist, FrequencyType, FrequencyUnit, PlanType } from '../../models';

@Component({
  selector: 'app-plan-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div *ngIf="isOpen" class="fixed inset-0 z-50" (click)="onBackdrop($event)">
    <div class="absolute inset-0 bg-black/30"></div>
    <div class="absolute inset-0 flex items-start justify-center overflow-auto py-8 px-4">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-5xl" (click)="$event.stopPropagation()">
        <div class="p-6 border-b">
          <div class="text-lg font-semibold">Create Maintenance Plan</div>
          <div class="text-sm text-gray-500">Basic Info → Assets → Checklist → Schedule</div>
          <div class="mt-3 flex gap-2">
            <button *ngFor="let s of steps; index as i" class="px-3 py-1 rounded-full border" [class.bg-blue-600]="i===step()" [class.text-white]="i===step()" (click)="go(i)">{{s}}</button>
          </div>
        </div>

        <div class="p-6 space-y-4">
          <ng-container [ngSwitch]="step()">
            <ng-container *ngSwitchCase="0">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="text-sm font-medium">Name<span class="text-red-500">*</span></label>
                  <input class="mt-1 w-full border rounded px-3 py-2" [(ngModel)]="model.name" placeholder="Plan name" />
                </div>
                <div>
                  <label class="text-sm font-medium">Priority ID</label>
                  <input type="number" class="mt-1 w-full border rounded px-3 py-2" [(ngModel)]="model.priority_id" />
                </div>
                <div>
                  <label class="text-sm font-medium">Plan Type</label>
                  <select class="mt-1 w-full border rounded px-3 py-2" [(ngModel)]="model.plan_type">
                    <option value="preventive">preventive</option>
                    <option value="predictive">predictive</option>
                    <option value="condition_based">condition_based</option>
                  </select>
                </div>
                <div>
                  <label class="text-sm font-medium">Estimated Duration (min)</label>
                  <input type="number" class="mt-1 w-full border rounded px-3 py-2" [(ngModel)]="model.estimeted_duration" min="0" />
                </div>
                <div class="md:col-span-2">
                  <label class="text-sm font-medium">Descriptions</label>
                  <textarea class="mt-1 w-full border rounded px-3 py-2" [(ngModel)]="model.descriptions" rows="2"></textarea>
                </div>
                <div class="md:col-span-2">
                  <label class="text-sm font-medium">Instructions</label>
                  <textarea class="mt-1 w-full border rounded px-3 py-2" [(ngModel)]="model.instractions" rows="2"></textarea>
                </div>
                <div class="md:col-span-2">
                  <label class="text-sm font-medium">Safety Notes</label>
                  <textarea class="mt-1 w-full border rounded px-3 py-2" [(ngModel)]="model.safety_notes" rows="2"></textarea>
                </div>
                <div class="flex items-center gap-2">
                  <input id="is_active" type="checkbox" [(ngModel)]="model.is_active" />
                  <label for="is_active" class="text-sm">Active</label>
                </div>
              </div>
            </ng-container>

            <ng-container *ngSwitchCase="1">
              <div>
                <label class="text-sm font-medium">Asset IDs (comma separated)</label>
                <input class="mt-1 w-full border rounded px-3 py-2" [ngModel]="assetIdsCsv()" (ngModelChange)="setAssetIdsCsv($event)" placeholder="e.g. 1001,1002" />
              </div>
            </ng-container>

            <ng-container *ngSwitchCase="2">
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <div class="font-medium">Checklist Items<span class="text-red-500" *ngIf="items().length===0"> (add at least one)</span></div>
                  <button class="btn btn-primary" (click)="addItem()">+ Add Item</button>
                </div>
                <div *ngFor="let it of items(); index as i" class="border rounded-lg p-3 space-y-2">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <input class="border rounded px-3 py-2" [(ngModel)]="it.title" placeholder="Title" />
                    <select class="border rounded px-3 py-2" [(ngModel)]="it.type">
                      <option value="checkbox">checkbox</option>
                      <option value="measurements">measurements</option>
                      <option value="text_input">text_input</option>
                      <option value="photo_capture">photo_capture</option>
                      <option value="pass_fail">pass_fail</option>
                    </select>
                    <input type="number" class="border rounded px-3 py-2" [(ngModel)]="it.order" min="0" placeholder="Order" />
                  </div>
                  <textarea class="w-full border rounded px-3 py-2" [(ngModel)]="it.description" rows="2" placeholder="Description (optional)"></textarea>
                  <div class="flex flex-wrap gap-4">
                    <label class="inline-flex items-center gap-2 text-sm"><input type="checkbox" [(ngModel)]="it.is_required" /> Required</label>
                    <label class="inline-flex items-center gap-2 text-sm"><input type="checkbox" [(ngModel)]="it.is_safety_critical" /> Safety Critical</label>
                    <label class="inline-flex items-center gap-2 text-sm"><input type="checkbox" [(ngModel)]="it.is_photo_required" /> Photo Required</label>
                  </div>
                  <div class="text-right">
                    <button class="text-red-600 text-sm" (click)="removeItem(i)">Remove</button>
                  </div>
                </div>
              </div>
            </ng-container>

            <ng-container *ngSwitchCase="3">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label class="text-sm font-medium">Frequency Type</label>
                  <select class="mt-1 w-full border rounded px-3 py-2" [(ngModel)]="model.frequency_type">
                    <option value="time">time</option>
                    <option value="usage">usage</option>
                    <option value="condition">condition</option>
                  </select>
                </div>
                <div>
                  <label class="text-sm font-medium">Frequency Value</label>
                  <input type="number" class="mt-1 w-full border rounded px-3 py-2" [(ngModel)]="model.frequency_value" [disabled]="model.frequency_type!=='time'" min="1" />
                </div>
                <div>
                  <label class="text-sm font-medium">Frequency Unit</label>
                  <select class="mt-1 w-full border rounded px-3 py-2" [(ngModel)]="model.frequency_unit" [disabled]="model.frequency_type!=='time'">
                    <option [ngValue]="null">--</option>
                    <option value="days">days</option>
                    <option value="weeks">weeks</option>
                    <option value="months">months</option>
                    <option value="years">years</option>
                  </select>
                </div>
              </div>
            </ng-container>
          </ng-container>
        </div>

        <div class="p-6 border-t flex justify-between items-center">
          <div class="text-sm text-red-600" *ngIf="error">{{error}}</div>
          <div class="ml-auto flex gap-2">
            <button class="btn" (click)="close()" [disabled]="loading">Cancel</button>
            <button class="btn" (click)="prev()" [disabled]="step()===0 || loading">Back</button>
            <button class="btn" (click)="next()" *ngIf="step()<3" [disabled]="loading">Next</button>
            <button class="btn btn-primary" *ngIf="step()===3" (click)="submit()" [disabled]="!canSubmit() || loading">Create</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
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


