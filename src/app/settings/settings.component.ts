import { Component, computed, inject, signal } from '@angular/core';
import {NgClass} from '@angular/common';
import { SettingsAccessService } from './settings-access.service';
import { AuthService } from '../core/services/auth.service';
import { CurrencySettingsComponent } from './components/currency-settings.component';
import { LanguageSettingsComponent } from './components/language-settings.component';
import { CompanySettingsComponent } from './components/company-settings.component';
import { ModuleSettingsComponent } from './components/module-settings.component';
import { PreferencesComponent } from './components/preferences.component';
import { DateTimeSettingsComponent } from './components/date-time-settings.component';

@Component({
  selector: 'app-settings',
  imports: [
    NgClass,
    CurrencySettingsComponent, LanguageSettingsComponent,
    CompanySettingsComponent, ModuleSettingsComponent,
    PreferencesComponent, DateTimeSettingsComponent
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  private access = inject(SettingsAccessService);
  private auth = inject(AuthService);

  tab = signal<'localisation'|'modules'|'company'|'preference'|'date'>('localisation');
  user = computed(() => this.auth.getCurrentUser());
  isAdmin = computed(() => this.access.isAdmin(this.user() as any));

  onTabChange(tab: 'localisation'|'modules'|'company'|'preference'|'date') {
    this.tab.set(tab);
  }
}
