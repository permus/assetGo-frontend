import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImportProgressPopupComponent } from './shared/components/import-progress-popup/import-progress-popup.component';
import { CurrencyService } from './core/services/currency.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImportProgressPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'assetGo-frontend';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    // Initialize currency from server on app load
    this.currencyService.refreshFromServer().subscribe();
  }
}