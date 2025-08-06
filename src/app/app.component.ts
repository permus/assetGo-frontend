import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImportProgressPopupComponent } from './shared/components/import-progress-popup/import-progress-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImportProgressPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'assetGo-frontend';
}