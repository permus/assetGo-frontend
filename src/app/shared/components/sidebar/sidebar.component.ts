import { Component, Input, OnInit, OnDestroy, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService, User } from '../../../core/services/auth.service';
import { ModuleAccessService } from '../../../core/services/module-access.service';
import { SettingsService, ModuleItem } from '../../../settings/settings.service';
import { Subject, combineLatest, takeUntil, distinctUntilChanged, debounceTime } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Input() sidebarOpen: boolean = true;
  
  modules = signal<Record<string, boolean>>({});
  moduleList = signal<ModuleItem[]>([]);
  currentUser: User | null = null;
  private destroy$ = new Subject<void>();

  // Computed signal for filtered and sorted modules
  visibleModuleList = computed(() => {
    const modules = this.modules();
    const list = this.moduleList();
    const isOwner = this.isOwner();
    
    // Check if "locations" module exists
    const hasLocationsModule = list.some(m => m.key === 'locations' && modules[m.key] === true);
    
    // Modules to hide from sidebar
    const hiddenModules = [
      'sensors',
      'eservices',
      'tenant_portal',
      'maintenance_requests',
      'amenity_bookings',
      'move_in_out_requests',
      'fitout_requests',
      'inhouse_services',
      'parcel_management',
      'visitor_management',
      'business_directory',
      'tenant_communication'
    ];
    
    return list
      .filter(module => {
        // Always show system modules (dashboard, settings)
        if (module.is_system_module) {
          return true;
        }
        
        // Hide specified modules
        if (hiddenModules.includes(module.key)) {
          return false;
        }
        
        // Check if module is visible
        // Use module.is_enabled from API if available, otherwise check modules visibility
        // This ensures modules enabled in settings show up even if permission check is delayed
        const hasPermission = modules[module.key] === true;
        const isEnabledInSettings = module.is_enabled === true;
        
        // Module is visible if:
        // 1. User has permission AND module is enabled (from ModuleAccessService), OR
        // 2. Module is enabled in settings (fallback for cases where permission check might be delayed)
        const isVisible = hasPermission || (isEnabledInSettings && !module.is_system_module);
        
        // Debug: Log work_orders module visibility
        if (module.key === 'work_orders') {
          console.log('Work Orders module check:', {
            moduleKey: module.key,
            isEnabled: module.is_enabled,
            hasPermission,
            isEnabledInSettings,
            isVisible,
            modulesValue: modules[module.key],
            allModules: modules
          });
        }
        
        if (!isVisible) {
          return false;
        }
        
        // Deduplicate: Filter out "Facilities & Locations" if "Locations" exists
        // Both are the same module, prefer "Locations"
        if (hasLocationsModule && 
            (module.key === 'facilities_locations' || 
             module.display_name?.toLowerCase().includes('facilities & locations'))) {
          return false;
        }
        
        // Check owner-only modules
        const ownerOnlyModules = ['roles', 'teams'];
        if (ownerOnlyModules.includes(module.key)) {
          return isOwner;
        }
        
        return true;
      })
      .sort((a, b) => {
        // Settings always at the bottom
        if (a.key === 'settings') return 1;
        if (b.key === 'settings') return -1;
        
        // Dashboard always at the top
        if (a.key === 'dashboard') return -1;
        if (b.key === 'dashboard') return 1;
        
        // Other system modules after dashboard
        if (a.is_system_module && !b.is_system_module) return -1;
        if (!a.is_system_module && b.is_system_module) return 1;
        
        // Then sort by sort_order
        return a.sort_order - b.sort_order;
      });
  });

  constructor(
    private authService: AuthService,
    private moduleAccessService: ModuleAccessService,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    // Subscribe to current user changes
    this.authService.currentUser$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(user => {
      this.currentUser = user;
    });

    // Subscribe to visible modules
    this.moduleAccessService.visibleModules$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(visibleModules => {
      this.modules.set(visibleModules);
      // Debug: Log work_orders visibility
      console.log('Sidebar visibleModules updated:', {
        work_orders: visibleModules['work_orders'],
        allModules: visibleModules
      });
    });

    // Load modules initially
    this.loadModules(false);

    // Subscribe to module enabled changes to refresh module list
    // Use debounceTime and distinctUntilChanged to prevent excessive API calls
    this.settingsService.getModulesEnabled$().pipe(
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)),
      debounceTime(300),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      // When modules are enabled/disabled, force refresh the module list
      this.loadModules(true);
    });
  }

  /**
   * Load modules from API
   * @param forceRefresh - If true, forces a fresh fetch from the server
   */
  private loadModules(forceRefresh: boolean = false): void {
    this.settingsService.listModules(forceRefresh).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (response) => {
        if (response.success && response.data?.modules) {
          this.moduleList.set(response.data.modules);
          // Debug: Log work_orders module if present
          const workOrdersModule = response.data.modules.find((m: ModuleItem) => m.key === 'work_orders');
          if (workOrdersModule) {
            console.log('Work Orders module found:', workOrdersModule);
          } else {
            console.warn('Work Orders module not found in API response');
          }
        }
      },
      error: (error) => {
        console.error('Failed to load modules for sidebar:', error);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  isOwner(): boolean {
    if (!this.currentUser) {
      return false;
    }
    // Check if user is admin (by user_type)
    if (this.currentUser.user_type?.toLowerCase() === 'admin') {
      return true;
    }
    // Check if the current user's ID matches the company's owner_id
    if (this.currentUser.company) {
      return this.currentUser.company.owner_id === this.currentUser.id;
    }
    return false;
  }

  isRtl(): boolean {
    return document.documentElement.dir === 'rtl';
  }

  /**
   * Get icon SVG based on module key
   * Always uses hardcoded mapping to ensure icons stay consistent
   */
  getModuleIcon(module: ModuleItem): string {
    const iconMap: Record<string, string> = {
      'dashboard': 'chart-column',
      'assets': 'package',
      'locations': 'map-pin',
      'roles': 'user',
      'work_orders': 'clipboard',
      'teams': 'users',
      'maintenance': 'calendar',
      'inventory': 'warehouse',
      'ai_features': 'bot',
      'reports': 'file-text',
      'settings': 'settings',
      'sla': 'clock',
      'sensors': 'radio',
      'eservices': 'globe',
      'tenant_portal': 'door-open',
      'maintenance_requests': 'tool',
      'amenity_bookings': 'calendar-check',
      'move_in_out_requests': 'arrow-right-left',
      'fitout_requests': 'hammer',
      'inhouse_services': 'briefcase',
      'parcel_management': 'package-check',
      'visitor_management': 'user-check',
      'business_directory': 'building-2',
      'tenant_communication': 'message-square'
    };

    // Always use module.key for mapping to ensure consistency
    return iconMap[module.key] || 'circle';
  }

  /**
   * Get icon color class based on module key
   */
  getModuleIconColor(module: ModuleItem): string {
    const colorMap: Record<string, string> = {
      'dashboard': 'text-blue-600',
      'assets': 'text-green-600',
      'locations': 'text-purple-600',
      'roles': 'text-gray-600',
      'work_orders': 'text-gray-600',
      'teams': 'text-teal-600',
      'maintenance': 'text-cyan-600',
      'inventory': 'text-indigo-600',
      'ai_features': 'text-pink-600',
      'reports': 'text-orange-600',
      'settings': 'text-slate-600',
      'sla': 'text-blue-500',
      'sensors': 'text-emerald-600',
      'eservices': 'text-blue-500',
      'tenant_portal': 'text-violet-600',
      'maintenance_requests': 'text-amber-600',
      'amenity_bookings': 'text-cyan-500',
      'move_in_out_requests': 'text-indigo-500',
      'fitout_requests': 'text-orange-500',
      'inhouse_services': 'text-purple-500',
      'parcel_management': 'text-green-500',
      'visitor_management': 'text-teal-500',
      'business_directory': 'text-slate-500',
      'tenant_communication': 'text-blue-400'
    };

    return colorMap[module.key] || 'text-gray-600';
  }

  /**
   * Get route path for module
   */
  getModuleRoute(module: ModuleItem): string {
    if (module.route_path) {
      return module.route_path;
    }

    // Fallback route mapping
    const routeMap: Record<string, string> = {
      'dashboard': '/dashboard',
      'assets': '/assets',
      'locations': '/locations',
      'roles': '/roles',
      'work_orders': '/work-orders',
      'teams': '/teams',
      'maintenance': '/maintenance',
      'inventory': '/inventory',
      'ai_features': '/ai',
      'reports': '/reports',
      'sla': '/sla',
      'settings': '/settings'
    };

    return routeMap[module.key] || '/dashboard';
  }

  /**
   * Get SVG icon markup for a module
   */
  getIconSvg(iconName: string): string {
    const icons: Record<string, string> = {
      'chart-column': `<path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path>`,
      'package': `<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path><path d="m7.5 4.27 9 5.15"></path>`,
      'map-pin': `<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle>`,
      'user': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>`,
      'clipboard': `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>`,
      'users': `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>`,
      'calendar': `<path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>`,
      'warehouse': `<path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"></path><path d="M6 18h12"></path><path d="M6 14h12"></path><rect width="12" height="12" x="6" y="10"></rect>`,
      'bot': `<path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path>`,
      'file-text': `<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>`,
      'settings': `<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle>`
    };

    return icons[iconName] || '';
  }
}

