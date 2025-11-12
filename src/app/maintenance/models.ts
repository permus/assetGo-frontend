export type PlanType = 'preventive' | 'predictive' | 'condition_based';
export type FrequencyType = 'time' | 'usage' | 'condition';
export type FrequencyUnit = 'days' | 'weeks' | 'months' | 'years';
export type ChecklistType = 'checkbox' | 'measurements' | 'text_input' | 'photo_capture' | 'pass_fail';
export type ScheduleStatus = 'scheduled' | 'in_progress' | 'completed';

export interface Priority {
  id: number;
  name: string;
}

export interface MaintenancePlanChecklist {
  id?: number;
  maintenance_plan_id?: number;
  title: string;
  type: ChecklistType;
  description?: string | null;
  is_required?: boolean;
  is_safety_critical?: boolean;
  is_photo_required?: boolean;
  order?: number;
}

export interface MaintenancePlan {
  id?: number;
  company_id?: number;
  name: string;
  priority_id?: number | null;
  priority?: Priority | null;
  assets?: any[];
  sort?: number;
  descriptions?: string | null;
  category_id?: number | null;
  plan_type?: PlanType;
  estimeted_duration?: number | null;
  instractions?: string | null;
  safety_notes?: string | null;
  asset_ids?: number[] | null;
  frequency_type?: FrequencyType;
  frequency_value?: number | null;
  frequency_unit?: FrequencyUnit | null;
  is_active?: boolean;
  scheduled_count?: number;
  checklists?: MaintenancePlanChecklist[];
  created_at?: string | null;
  updated_at?: string | null;
}

export interface ScheduleMaintenance {
  id?: number;
  maintenance_plan_id: number;
  plan_name?: string | null;
  asset_ids?: number[] | null;
  assets?: Array<{ id: number; name: string }> | null;
  start_date?: string | null;
  due_date?: string | null;
  status?: ScheduleStatus;
  priority_id?: number | null;
  priority?: Priority | null;
}

export interface MaintenanceChecklistResponse {
  id?: number;
  schedule_maintenance_assigned_id: number;
  checklist_item_id: number;
  user_id: number;
  response_type: ChecklistType;
  response_value: any;
  photo_url?: string | null;
  completed_at?: string | null;
  checklist_item?: MaintenancePlanChecklist;
}

export interface AssignedMaintenance {
  id: number;
  schedule_maintenance_id: number;
  team_id: number;
  created_at?: string;
  updated_at?: string;
  schedule?: {
    id: number;
    start_date: string;
    due_date: string;
    status: ScheduleStatus;
    priority_id?: number;
    asset_ids?: number[];
  };
  plan?: {
    id: number;
    name: string;
    descriptions?: string;
    instractions?: string;
    safety_notes?: string;
    estimeted_duration?: number;
    priority_id?: number;
  };
  checklist_items?: MaintenancePlanChecklist[];
  responses?: MaintenanceChecklistResponse[];
  user?: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
}

export interface AssignableUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  user_type: string;
}

export interface ScheduleAssignment {
  id: number;
  schedule_maintenance_id: number;
  team_id: number;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    user_type: string;
  };
  completion_percentage: number;
  completed_items: number;
  total_items: number;
  is_completed: boolean;
  created_at: string;
  updated_at: string;
}

export interface Paginated<T> {
  success: boolean;
  data: T[] | { [key: string]: any };
  pagination?: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
  };
  meta?: any;
}


