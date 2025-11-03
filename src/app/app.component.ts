import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'assetGo-frontend';

  constructor(
    private currencyService: CurrencyService,
    private preferencesService: PreferencesService,
    private settingsService: SettingsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Only make API calls if user is authenticated (not on landing page)
    if (this.authService.isAuthenticated()) {
      // Initialize currency from server on app load
      this.currencyService.refreshFromServer().subscribe({
        error: () => {
          // Silently fail - use defaults
        }
      });
      
      // Load user preferences and apply to app
      this.preferencesService.syncFromBackend().subscribe({
        next: (response) => {
          if (response.success && response.data) {
            this.preferencesService.updatePreferences(response.data);
          }
        },
        error: () => {
          // Use defaults if sync fails
        }
      });

      // Load modules once on page reload if user is authenticated
      this.settingsService.listModules().subscribe({
        error: () => {
          // Silently fail - modules will be loaded on first access via getModulesEnabled$()
        }
      });
    }
  }
}