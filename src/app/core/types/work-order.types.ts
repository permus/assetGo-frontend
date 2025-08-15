export interface MetaItem {
  id: number;
  name: string;
  slug: string;
  is_management?: boolean;
  sort: number;
}

export interface WorkOrderListQuery {
  page?: number;
  status_id?: number | null;
  priority_id?: number | null;
  category_id?: number | null;
  search?: string | null;
  asset_id?: number | null;
  location_id?: number | null;
  assigned_to?: number | null;
  is_overdue?: boolean | null;
  start_date?: string | null;
  end_date?: string | null;
  due_start_date?: string | null;
  due_end_date?: string | null;
  sort_by?: string;
  sort_dir?: 'asc' | 'desc';
  per_page?: number;
}
