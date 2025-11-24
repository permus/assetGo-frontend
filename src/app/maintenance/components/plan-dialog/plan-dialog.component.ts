import { Component, EventEmitter, Input, Output, signal, computed, HostListener, OnInit, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaintenanceService } from '../../maintenance.service';
import { MaintenancePlan, MaintenancePlanChecklist, FrequencyType, FrequencyUnit, PlanType } from '../../models';
import { MetaWorkOrdersService } from '../../../core/services/meta-work-orders.service';
import { MetaItem } from '../../../core/types/work-order.types';
import { AssetService } from '../../../assets/services/asset.service';

@Component({
  selector: 'app-plan-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrl: 'plan-dialog.scss',
  templateUrl: 'plan-dialog.html',
})
export class PlanDialogComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() isOpen = false;
  @Input() editMode = false;
  @Input() planToEdit: MaintenancePlan | null = null;
  @Output() closed = new EventEmitter<void>();
  @Output() created = new EventEmitter<any>();
  @Output() updated = new EventEmitter<any>();

  steps = ['Basic Info', 'Assets', 'Checklist', 'Schedule'];
  step = signal(0);
  loading = false;
  error: string | null = null;
  fieldErrors: { [key: string]: string[] } = {};
  private assetsSearchTimeout: ReturnType<typeof setTimeout> | null = null;
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

  // UI state for dropdowns per FRONTEND_RULES
  showPlanTypeDropdown = false;
  showFrequencyTypeDropdown = false;
  showFrequencyUnitDropdown = false;
  openItemTypeDropdownIndex: number | null = null;

  // Options
  planTypeOptions: Array<{ value: PlanType; name: string }> = [
    { value: 'preventive', name: 'preventive' },
    { value: 'predictive', name: 'predictive' },
    { value: 'condition_based', name: 'Condition Based' },
  ];
  itemTypeOptions: Array<MaintenancePlanChecklist['type']> = [
    'checkbox', 'measurements', 'text_input', 'photo_capture', 'pass_fail'
  ];
  frequencyTypeOptions: Array<{ value: FrequencyType; name: string }> = [
    { value: 'time', name: 'Time Based' },
    { value: 'usage', name: 'Usage Based' },
    { value: 'condition', name: 'Condition Based' },
  ];
  frequencyUnitOptions: Array<FrequencyUnit> = ['days', 'weeks', 'months', 'years'];

  submitted = false;

  // Assets tab state
  assets = signal<any[]>([]);
  assetsLoading = false;
  assetsError: string | null = null;
  assetsPage = signal(1);
  readonly assetsPerPage = 12;
  assetsTotal = signal(0);
  searchAssets = signal('');
  assetCategoryOptions: Array<{ id: number; name: string }> = [];
  assetStatusOptions: Array<{ id: number; name: string }> = [];
  selectedAssetCategoryId: number | null = null;
  selectedAssetStatusId: number | null = null;
  selectedAssetIds = signal<Set<number>>(new Set());
  showAssetCategoryDropdown = false;
  showAssetStatusDropdown = false;
  selectedAssetCategory: { id: number; name: string } | null = null;
  selectedAssetStatus: { id: number; name: string } | null = null;
  showBulkActions = false;
  
  // Inventory Parts
  linkedParts: any[] = [];
  selectedParts: any[] = [];
  partsLoading = false;
  // Checklist - add new item form state
  newChecklistItem: MaintenancePlanChecklist = {
    title: '',
    type: 'checkbox',
    description: '',
    is_required: false,
    is_safety_critical: false,
    is_photo_required: false,
  };
  showNewItemTypeDropdown = false;

  constructor(private api: MaintenanceService, private meta: MetaWorkOrdersService, private assetsApi: AssetService) {}

  go(i: number) {
    this.step.set(i);
    // Load assets when navigating to Assets tab (step 1)
    if (i === 1) this.ensureAssetsLoaded();
  }
  onTabClick(i: number) {
    // In edit mode, allow access to all tabs
    if (this.editMode) {
      this.go(i);
      return;
    }
    
    // In create mode, maintain the original validation logic
    // Allow backward navigation always
    if (i <= this.step()) { this.go(i); return; }
    // Only allow forward one step if current step is valid
    if (i === this.step() + 1 && this.canGoNext()) {
      this.go(i);
    }
  }

  // Helper method to check if a tab is accessible
  isTabAccessible(tabIndex: number): boolean {
    // In edit mode, all tabs are accessible
    if (this.editMode) {
      return true;
    }
    
    // In create mode, allow backward navigation and forward if current step is valid
    return tabIndex <= this.step() || (tabIndex === this.step() + 1 && this.canGoNext());
  }
  next() {
    if (this.step() < 3) {
      this.step.set(this.step()+1);
      if (this.step() === 1) this.ensureAssetsLoaded();
    }
  }
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

  // Priority dropdown state/data pulled from Work Orders meta service
  priorityOptions: MetaItem[] = [];
  selectedPriorityMeta: MetaItem | null = null;
  showPriorityDropdown = false;

  ngOnInitHookLoaded = false;
  ngOnInitOnce() {
    if (this.ngOnInitHookLoaded) return;
    this.ngOnInitHookLoaded = true;
    this.meta.clearPrioritiesCache();
    this.meta.getPriorities().subscribe({
      next: (priorities) => {
        this.priorityOptions = priorities;
        const def = priorities.find(p => p.slug === 'medium') || priorities[0] || null;
        if (def) {
          this.selectPriority(def);
        }
      },
      error: () => {
        this.priorityOptions = [];
      }
    });
  }

  // Ensure meta loaded when dialog opens (component constructed earlier)
  ngAfterViewInit() { this.ngOnInitOnce(); }

  loadPlanForEditing() {
    if (!this.planToEdit?.id) return;

    // Call the API to get complete plan data
    this.loading = true;
    this.api.getPlan(this.planToEdit.id).subscribe({
      next: (response) => {
        const planData = response?.data?.plan || response;

        // Load the complete plan data into the model
        this.model = {
          ...planData,
          checklist_items: []
        };

        // Load checklist items
        if (planData.checklists && planData.checklists.length > 0) {
          this.items.set([...planData.checklists]);
        }

        // Load asset IDs
        if (planData.asset_ids && planData.asset_ids.length > 0) {
          this.selectedAssetIds.set(new Set(planData.asset_ids));
          this.assetIdsCsv.set(planData.asset_ids.join(', '));
        }

        // Load priority if available
        if (planData?.priority_id) {
          // Find the priority in the options and set it
          const priority = this.priorityOptions.find(p => p.id === planData.priority_id);
          if (priority) {
            this.selectedPriorityMeta = priority;
          }
        }

        this.loading = false;
      },
      error: (error) => {
        console.error('Failed to load plan data:', error);
        this.loading = false;

        // Fallback to basic data if API fails
        this.loadBasicPlanData();
      }
    });
  }

  private loadBasicPlanData() {
    if (!this.planToEdit) return;

    // Load the basic plan data into the model
    this.model = {
      ...this.planToEdit,
      checklist_items: []
    };

    // Load checklist items
    if (this.planToEdit.checklists && this.planToEdit.checklists.length > 0) {
      this.items.set([...this.planToEdit.checklists]);
    }

    // Load asset IDs
    if (this.planToEdit.asset_ids && this.planToEdit.asset_ids.length > 0) {
      this.selectedAssetIds.set(new Set(this.planToEdit.asset_ids));
      this.assetIdsCsv.set(this.planToEdit.asset_ids.join(', '));
    }

    // Load priority if available
    if (this.planToEdit?.priority_id) {
      // Find the priority in the options and set it
      const priority = this.priorityOptions.find(p => p.id === this.planToEdit!.priority_id);
      if (priority) {
        this.selectedPriorityMeta = priority;
      }
    }
  }
  ngOnInit() {
    this.ngOnInitOnce();

    // If editing, load the plan data
    if (this.editMode && this.planToEdit?.id) {
      // Small delay to ensure component is fully initialized
      setTimeout(() => {
        this.loadPlanForEditing();
      }, 100);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // Handle changes to editMode or planToEdit inputs
    if (changes['editMode'] || changes['planToEdit']) {
      if (this.editMode && this.planToEdit?.id && this.isOpen) {
        // Small delay to ensure component is fully initialized
        setTimeout(() => {
          this.loadPlanForEditing();
        }, 100);
      }
    }
  }

  // Validation helpers (Rule 2)
  hasFieldError(controlName: string): boolean {
    if (!this.submitted) return false;

    // Check for backend validation errors first
    if (this.fieldErrors[controlName] && this.fieldErrors[controlName].length > 0) {
      return true;
    }

    // Check for frontend validation errors
    switch (controlName) {
      case 'name':
        return !this.model.name || this.model.name.trim().length === 0;
      case 'frequency_value':
        if (this.model.frequency_type !== 'time') return false;
        return !this.model.frequency_value || this.model.frequency_value < 1 as any;
      case 'frequency_unit':
        if (this.model.frequency_type !== 'time') return false;
        return !this.model.frequency_unit;
      default:
        return false;
    }
  }

  getFieldError(controlName: string): string {
    // Return backend validation error if available
    if (this.fieldErrors[controlName] && this.fieldErrors[controlName].length > 0) {
      return this.fieldErrors[controlName][0];
    }

    // Return frontend validation error
    switch (controlName) {
      case 'name':
        return 'This field is required.';
      case 'frequency_value':
        return 'Minimum value is 1.';
      case 'frequency_unit':
        return 'This field is required.';
      default:
        return 'Invalid value.';
    }
  }

  // Clear field errors when user starts typing
  clearFieldError(fieldName: string) {
    if (this.fieldErrors[fieldName]) {
      delete this.fieldErrors[fieldName];
    }
  }

  // Dropdown helpers (Rule 1)
  togglePlanTypeDropdown() { this.showPlanTypeDropdown = !this.showPlanTypeDropdown; }
  selectPlanType(value: PlanType) {
    this.model.plan_type = value;
    this.showPlanTypeDropdown = false;
  }
  getPlanTypeName(val: PlanType | null | undefined): string {
    if (!val) return '';
    return val
      .toLowerCase()
      .replace(/_/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase());

  }

  toggleNewItemTypeDropdown() { this.showNewItemTypeDropdown = !this.showNewItemTypeDropdown; }
  selectNewItemType(t: MaintenancePlanChecklist['type']) { this.newChecklistItem.type = t; this.showNewItemTypeDropdown = false; }

  toggleFrequencyTypeDropdown() { this.showFrequencyTypeDropdown = !this.showFrequencyTypeDropdown; }
  selectFrequencyType(value: FrequencyType) {
    this.model.frequency_type = value;
    this.showFrequencyTypeDropdown = false;
    if (value !== 'time') {
      this.model.frequency_unit = null as any;
      this.model.frequency_value = undefined as any;
    }
  }
  getFrequencyTypeLabel(val: FrequencyType | null | undefined): string {
    const found = this.frequencyTypeOptions.find(o => o.value === val);
    return found?.name || '';
  }

  toggleFrequencyUnitDropdown() { this.showFrequencyUnitDropdown = !this.showFrequencyUnitDropdown; }
  selectFrequencyUnit(u: FrequencyUnit) {
    this.model.frequency_unit = u;
    this.showFrequencyUnitDropdown = false;
  }

  togglePriorityDropdown() { this.showPriorityDropdown = !this.showPriorityDropdown; }
  selectPriority(priority: MetaItem) {
    this.selectedPriorityMeta = priority;
    this.model.priority_id = priority.id as any;
    this.showPriorityDropdown = false;
  }

  // Priority helpers (descriptions/colors consistent with Work Orders)
  getPriorityDescription(priority: MetaItem): string {
    if (!priority) return '';
    switch (priority.slug) {
      case 'low': return 'Low priority - can be addressed when convenient';
      case 'medium': return 'Medium priority - should be addressed soon';
      case 'high': return 'High priority - needs immediate attention';
      case 'critical': return 'Critical priority - urgent, requires immediate action';
      case 'ppm': return 'Preventive maintenance - scheduled maintenance task';
      default: return priority.name || priority.slug;
    }
  }

  // ===== Assets Tab Logic =====
  private ensureAssetsLoaded() {
    if (this.assetCategoryOptions.length === 0) {
      this.assetsApi.getAssetCategories().subscribe({
        next: (res) => {
          // Handle different response formats
          let data: any[] = [];
          if (res?.data?.categories) {
            data = res.data.categories;
          } else if (res?.success && res?.data) {
            data = res.data;
          } else if (Array.isArray(res?.data)) {
            data = res.data;
          } else if (Array.isArray(res)) {
            data = res;
          }
          
          this.assetCategoryOptions = data.map((cat: any) => ({
            id: cat.id,
            name: cat.name || cat.category_name || 'Unknown Category'
          }));
        },
        error: (error) => { 
          console.error('Failed to load asset categories:', error);
          this.assetCategoryOptions = []; 
        }
      });
    }
    if (this.assetStatusOptions.length === 0) {
      this.assetsApi.getAssetStatuses().subscribe({
        next: (res) => {
          // Handle different response formats
          let data: any[] = [];
          if (res?.data?.statuses) {
            data = res.data.statuses;
          } else if (res?.success && res?.data) {
            data = res.data;
          } else if (Array.isArray(res?.data)) {
            data = res.data;
          } else if (Array.isArray(res)) {
            data = res;
          }
          
          this.assetStatusOptions = data.map((status: any) => ({
            id: status.id,
            name: status.name || status.status_name || 'Unknown Status'
          }));
        },
        error: (error) => { 
          console.error('Failed to load asset statuses:', error);
          this.assetStatusOptions = []; 
        }
      });
    }
    this.loadAssets();
  }

  loadAssets() {
    this.assetsLoading = true;
    this.assetsError = null;
    const params: any = {
      page: this.assetsPage(),
      per_page: this.assetsPerPage,
      search: this.searchAssets(),
      category_id: this.selectedAssetCategoryId || undefined,
      status_id: this.selectedAssetStatusId || undefined,
    };
    this.assetsApi.getAssets(params).subscribe({
      next: (res) => {
        console.log('Assets API Response:', res); // Debug log
        
        // Handle response similar to asset-list component
        if (res?.success) {
          const list = res?.data?.assets || res?.data || [];
          this.assets.set(Array.isArray(list) ? list : []);
          
          // Use pagination data from response like asset-list component
          if (res.data.pagination) {
            this.assetsTotal.set(res.data.pagination.total || 0);
            console.log('Using pagination data:', res.data.pagination);
          } else {
            // Fallback to other total sources
            const total = res?.data?.total ?? res?.data?.meta?.total ?? res?.meta?.total ?? res?.total ?? (Array.isArray(list) ? list.length : 0);
            this.assetsTotal.set(Number(total) || 0);
            console.log('Using fallback total:', total);
          }
          
          console.log('Total assets:', this.assetsTotal(), 'Current page:', this.assetsPage(), 'Per page:', this.assetsPerPage);
          
          if (this.model.asset_ids?.length) {
            this.selectedAssetIds.set(new Set(this.model.asset_ids as any));
            this.showBulkActions = this.selectedAssetIds().size > 0;
          }
        } else {
          this.assetsError = res?.message || 'Failed to load assets';
          this.assets.set([]);
          this.assetsTotal.set(0);
        }
      },
      error: (err) => {
        console.error('Assets API Error:', err); // Debug log
        this.assetsError = err?.error?.message || 'Failed to load assets';
        this.assets.set([]);
        this.assetsTotal.set(0);
      },
      complete: () => { this.assetsLoading = false; }
    });
  }

  totalAssetPages(): number {
    const t = this.assetsTotal();
    const totalPages = t > 0 ? Math.ceil(t / this.assetsPerPage) : 1;
    console.log('Calculating total pages. Total assets:', t, 'Per page:', this.assetsPerPage, 'Total pages:', totalPages);
    return totalPages;
  }

  nextAssetsPage() { 
    console.log('Next page clicked. Current page:', this.assetsPage(), 'Total pages:', this.totalAssetPages());
    if (this.assetsPage() < this.totalAssetPages()) { 
      this.assetsPage.set(this.assetsPage()+1); 
      this.loadAssets(); 
    }
  }
  prevAssetsPage() { 
    console.log('Prev page clicked. Current page:', this.assetsPage(), 'Total pages:', this.totalAssetPages());
    if (this.assetsPage() > 1) { 
      this.assetsPage.set(this.assetsPage()-1); 
      this.loadAssets(); 
    }
  }

  onAssetsSearchChange(v: string): void {
    if (this.assetsSearchTimeout) {
      clearTimeout(this.assetsSearchTimeout);
    }

    this.assetsSearchTimeout = setTimeout(() => {
      this.searchAssets.set(v);
      this.assetsPage.set(1);
      this.loadAssets();
    }, 500);
  }
  onAssetsCategoryChange(id: string) { this.selectedAssetCategoryId = id ? Number(id) : null; this.assetsPage.set(1); this.loadAssets(); }
  onAssetsStatusChange(id: string) { this.selectedAssetStatusId = id ? Number(id) : null; this.assetsPage.set(1); this.loadAssets(); }

  toggleAssetCategoryDropdown() {
    this.showAssetCategoryDropdown = !this.showAssetCategoryDropdown;
    this.showAssetStatusDropdown = false;
  }
  toggleAssetStatusDropdown() {
    this.showAssetStatusDropdown = !this.showAssetStatusDropdown;
    this.showAssetCategoryDropdown = false;
  }
  selectAssetCategoryFilter(cat: { id: number; name: string } | null) {
    this.selectedAssetCategory = cat;
    this.selectedAssetCategoryId = cat?.id ?? null;
    this.showAssetCategoryDropdown = false;
    this.assetsPage.set(1);
    this.loadAssets();
  }
  selectAssetStatusFilter(st: { id: number; name: string } | null) {
    this.selectedAssetStatus = st;
    this.selectedAssetStatusId = st?.id ?? null;
    this.showAssetStatusDropdown = false;
    this.assetsPage.set(1);
    this.loadAssets();
  }

  isAssetSelected(id: number): boolean { return this.selectedAssetIds().has(id); }
  toggleAssetSelection(id: number) {
    const set = new Set(this.selectedAssetIds());
    if (set.has(id)) set.delete(id); else set.add(id);
    this.selectedAssetIds.set(set);
    this.model.asset_ids = Array.from(set) as any;
    this.showBulkActions = set.size > 0;
    this.loadAssetParts();
  }
  selectAllOnPage() {
    const set = new Set(this.selectedAssetIds());
    for (const a of this.assets()) { if (a?.id != null) set.add(Number(a.id)); }
    this.selectedAssetIds.set(set);
    this.model.asset_ids = Array.from(set) as any;
    this.showBulkActions = set.size > 0;
    this.loadAssetParts();
  }
  clearAllSelection() {
    this.selectedAssetIds.set(new Set());
    this.model.asset_ids = [] as any;
    this.showBulkActions = false;
    this.linkedParts = [];
    this.selectedParts = [];
  }

  loadAssetParts() {
    const assetIds = Array.from(this.selectedAssetIds());
    if (assetIds.length === 0) {
      this.linkedParts = [];
      this.selectedParts = [];
      return;
    }

    this.partsLoading = true;
    this.api.getAssetParts(assetIds).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          // Map parts and add default quantity
          this.linkedParts = res.data.map((part: any) => ({
            ...part,
            default_qty: 1,
            is_required: true,
            selected: true
          }));
          this.selectedParts = [...this.linkedParts];
        } else {
          this.linkedParts = [];
          this.selectedParts = [];
        }
        this.partsLoading = false;
      },
      error: (err) => {
        console.error('Failed to load asset parts:', err);
        this.linkedParts = [];
        this.selectedParts = [];
        this.partsLoading = false;
      }
    });
  }

  updatePartQuantity(partId: number, qty: number) {
    const part = this.selectedParts.find(p => p.id === partId);
    if (part) {
      part.default_qty = qty;
    }
  }

  togglePartSelection(partId: number) {
    const part = this.selectedParts.find(p => p.id === partId);
    if (part) {
      part.selected = !part.selected;
      if (!part.selected) {
        this.selectedParts = this.selectedParts.filter(p => p.id !== partId);
      }
    } else {
      const linkedPart = this.linkedParts.find(p => p.id === partId);
      if (linkedPart) {
        linkedPart.selected = true;
        this.selectedParts.push(linkedPart);
      }
    }
  }

  removePart(partId: number) {
    this.selectedParts = this.selectedParts.filter(p => p.id !== partId);
    const linkedPart = this.linkedParts.find(p => p.id === partId);
    if (linkedPart) {
      linkedPart.selected = false;
    }
  }
  // Add checklist item from the form
  addItemFromForm() {
    const nextOrder = this.items().length;
    const toAdd: MaintenancePlanChecklist = {
      title: (this.newChecklistItem.title || '').trim(),
      type: this.newChecklistItem.type,
      description: (this.newChecklistItem.description || '').trim(),
      is_required: !!this.newChecklistItem.is_required,
      is_safety_critical: !!this.newChecklistItem.is_safety_critical,
      is_photo_required: !!this.newChecklistItem.is_photo_required,
      order: nextOrder,
    };
    if (!toAdd.title) return;
    this.items.set([...this.items(), toAdd]);
    this.newChecklistItem = { title: '', type: 'checkbox', description: '', is_required: false, is_safety_critical: false, is_photo_required: false };
  }

  @HostListener('document:click')
  closeAllDropdowns() {
    this.showPlanTypeDropdown = false;
    this.showFrequencyTypeDropdown = false;
    this.showFrequencyUnitDropdown = false;
    this.openItemTypeDropdownIndex = null;
    this.showPriorityDropdown = false;
    this.showAssetCategoryDropdown = false;
    this.showAssetStatusDropdown = false;
    this.showNewItemTypeDropdown = false;
  }

  canSubmit() {
    const hasChecklist = this.items().length > 0;
    const hasName = !!this.model.name && this.model.name.trim().length > 0;
    if (this.model.frequency_type === 'time') {
      return hasChecklist && hasName && !!this.model.frequency_value && !!this.model.frequency_unit;
    }
    return hasChecklist && hasName;
  }

  // Step-level validation for enabling Next
  canGoNext(): boolean {
    switch (this.step()) {
      case 0: {
        const hasName = !!this.model.name && this.model.name.trim().length > 0;
        const hasPlanType = !!this.model.plan_type;
        // priority is optional for next, but if options loaded and selected, keep
        return hasName && hasPlanType;
      }
      case 1: {
        // Assets step: no hard requirements
        return true;
      }
      case 2: {
        // Checklist step: at least one item
        return this.items().length > 0;
      }
      default:
        return false;
    }
  }

  submit() {
    this.submitted = true;
    if (!this.canSubmit()) return;
    this.loading = true;
    this.error = null;
    this.fieldErrors = {}; // Clear previous field errors

    const payload = { ...this.model, checklist_items: this.items().map((it, idx) => ({ ...it, order: it.order ?? idx })) };

    if (this.editMode && this.planToEdit?.id) {
      // Update existing plan
      this.api.updatePlan(this.planToEdit.id, payload).subscribe({
        next: (res) => {
          // Update parts if any selected
          if (this.selectedParts.length > 0) {
            const partsPayload = this.selectedParts.map(p => ({
              part_id: p.id,
              default_qty: p.default_qty || 1,
              is_required: p.is_required !== false
            }));
            // First get existing parts and remove them, then add new ones
            this.api.getPlanParts(this.planToEdit.id).subscribe({
              next: (partsRes) => {
                if (partsRes.success && partsRes.data) {
                  // Remove all existing parts
                  partsRes.data.forEach((existingPart: any) => {
                    this.api.removePlanPart(this.planToEdit!.id, existingPart.id).subscribe();
                  });
                }
                // Add new parts
                this.api.addPartsToPlan(this.planToEdit.id, partsPayload).subscribe({
                  next: () => {
                    this.loading = false;
                    this.updated.emit(res);
                    this.close();
                  },
                  error: (err) => {
                    console.error('Failed to update parts:', err);
                    this.loading = false;
                    this.updated.emit(res);
                    this.close();
                  }
                });
              },
              error: () => {
                // If get parts fails, just add new ones
                this.api.addPartsToPlan(this.planToEdit.id, partsPayload).subscribe({
                  next: () => {
                    this.loading = false;
                    this.updated.emit(res);
                    this.close();
                  },
                  error: () => {
                    this.loading = false;
                    this.updated.emit(res);
                    this.close();
                  }
                });
              }
            });
          } else {
            this.loading = false;
            this.updated.emit(res);
            this.close();
          }
        },
        error: (err) => {
          this.loading = false;

          // Handle backend validation errors
          if (err?.error?.errors && typeof err.error.errors === 'object') {
            this.fieldErrors = err.error.errors;
            // Set general error message if available
            this.error = err?.error?.message || 'Please fix the validation errors below.';
          } else {
            // Handle other types of errors
            const msg = err?.error?.message || 'Failed to update plan';
            this.error = msg;
          }
        }
      });
    } else {
      // Create new plan
      this.api.createPlan(payload).subscribe({
        next: (res) => {
          // Save parts if any selected
          if (this.selectedParts.length > 0 && res?.data?.id) {
            const partsPayload = this.selectedParts.map(p => ({
              part_id: p.id,
              default_qty: p.default_qty || 1,
              is_required: p.is_required !== false
            }));
            this.api.addPartsToPlan(res.data.id, partsPayload).subscribe({
              next: () => {
                this.loading = false;
                this.created.emit(res);
                this.close();
              },
              error: (err) => {
                console.error('Failed to save parts:', err);
                // Still emit created event even if parts save fails
                this.loading = false;
                this.created.emit(res);
                this.close();
              }
            });
          } else {
            this.loading = false;
            this.created.emit(res);
            this.close();
          }
        },
        error: (err) => {
          this.loading = false;

          // Handle backend validation errors
          if (err?.error?.errors && typeof err.error.errors === 'object') {
            this.fieldErrors = err.error.errors;
            // Set general error message if available
            this.error = err?.error?.message || 'Please fix the validation errors below.';
          } else {
            // Handle other types of errors
            const msg = err?.error?.message || 'Failed to create plan';
            this.error = msg;
          }
        }
      });
    }
  }

  private reset() {
    this.step.set(0);

    if (this.editMode && this.planToEdit?.id) {
      // Reset to edit mode with plan data from API
      this.loadPlanForEditing();
    } else {
      // Reset to create mode with default values
      this.model = {
        name: '', priority_id: undefined, sort: 0, descriptions: '', category_id: undefined,
        plan_type: 'preventive', estimeted_duration: undefined, instractions: '', safety_notes: '',
        asset_ids: [], frequency_type: 'time', frequency_value: 30, frequency_unit: 'days', is_active: true, checklist_items: []
      } as any;
      this.items.set([]);
      this.assetIdsCsv.set('');
      this.selectedAssetIds.set(new Set());
      this.showBulkActions = false;
    }

    this.error = null;
    this.fieldErrors = {};
    this.loading = false;
    this.submitted = false;
    this.closeAllDropdowns();
  }
}


