export type PlanType = 'preventive' | 'predictive' | 'condition_based';
export type FrequencyType = 'time' | 'usage' | 'condition';
export type FrequencyUnit = 'days' | 'weeks' | 'months' | 'years';
export type ChecklistType = 'checkbox' | 'measurements' | 'text_input' | 'photo_capture' | 'pass_fail';
export type ScheduleStatus = 'scheduled' | 'in_progress' | 'completed';

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
  priority?: any | null;
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
  asset_ids?: number[] | null;
  start_date?: string | null;
  due_date?: string | null;
  status?: ScheduleStatus;
  priority_id?: number | null;
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


