import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImportProgressPopupComponent } from './shared/components/import-progress-popup/import-progress-popup.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { CurrencyService } from './core/services/currency.service';
import { PreferencesService } from './core/services/preferences.service';
import { SettingsService } from './settings/settings.service';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImportProgressPopupComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'assetGo-frontend';
  private static appInitialized = false; // Static to persist across component recreations
  private instanceId = Math.random().toString(36).substr(2, 9);

  constructor(
    private currencyService: CurrencyService,
    private preferencesService: PreferencesService,
    private settingsService: SettingsService,
    private authService: AuthService
  ) {
    console.log('[AppComponent] Constructor called', { 
      instanceId: this.instanceId, 
      alreadyInitialized: AppComponent.appInitialized,
      timestamp: new Date().toISOString()
    });
  }

  ngOnInit(): void {
    console.log('[AppComponent] ngOnInit called', { 
      instanceId: this.instanceId,
      isAuthenticated: this.authService.isAuthenticated(),
      alreadyInitialized: AppComponent.appInitialized
    });
    
    // If user is already authenticated (page refresh), initialize services
    // Otherwise, they will be initialized after login in login.component.ts
    // Use static flag to prevent multiple initializations even if component is recreated
    if (this.authService.isAuthenticated() && !AppComponent.appInitialized) {
      AppComponent.appInitialized = true;
      console.log('[AppComponent] Initializing services for the first time');
      
      // Initialize currency from server
      this.currencyService.refreshFromServer().subscribe({
        next: () => console.log('[AppComponent] Currency loaded'),
        error: (err) => {
          console.warn('[AppComponent] Currency load failed:', err);
          // Silently fail - use defaults
        }
      });
      
      // Load user preferences and apply to app
      this.preferencesService.syncFromBackend().subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.preferencesService.updatePreferences(response.data);
            console.log('[AppComponent] Preferences loaded');
          }
        },
        error: (err) => {
          console.warn('[AppComponent] Preferences load failed:', err);
          // Use defaults if sync fails
        }
      });

      // Load modules
      this.settingsService.listModules().subscribe({
        next: () => console.log('[AppComponent] Modules loaded'),
        error: (err) => {
          console.warn('[AppComponent] Modules load failed:', err);
          // Silently fail - modules will be loaded on first access via getModulesEnabled$()
        }
      });
    } else if (AppComponent.appInitialized) {
      console.log('[AppComponent] Services already initialized, skipping');
    }
  }
  
  ngOnDestroy(): void {
    console.log('[AppComponent] ngOnDestroy called', { 
      instanceId: this.instanceId,
      timestamp: new Date().toISOString()
    });
  }
}