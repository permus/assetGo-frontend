import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-settings',
  imports: [
    NgClass
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
tab = 'localization';

onTabChange(tab: string) {
  this.tab = tab;
}
}
