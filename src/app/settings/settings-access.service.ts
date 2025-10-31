import { Injectable } from '@angular/core';
import { Company } from './settings.service';

export interface CurrentUser {
  id: number | string;
  user_type: string;
  company?: Company | null;
}

@Injectable({ providedIn: 'root' })
export class SettingsAccessService {
  isAdmin(user: CurrentUser | null | undefined): boolean {
    if (!user) return false;
    // Check if user is admin (by user_type)
    if (user.user_type?.toLowerCase() === 'admin' || user.user_type === 'super_admin' || user.user_type === 'company_admin') return true;
    // Check if the current user's ID matches the company's owner_id
    if (user.company && `${user.company.owner_id}` === `${user.id}`) return true;
    return false;
  }
}


