import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ImportProgressService, ImportProgressState } from '../../services/import-progress.service';

@Component({
  selector: 'app-import-progress-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './import-progress-popup.component.html',
  styleUrls: ['./import-progress-popup.component.scss']
})
export class ImportProgressPopupComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  state: ImportProgressState = {
    showProgressBox: false,
    currentJobId: null,
    progressPercentage: 0,
    progressMessage: 'Starting import...',
    isCompleted: false,
    isImportComplete: false,
    importResults: null,
    failedImportsCsvData: null
  };

  constructor(
    private importProgressService: ImportProgressService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Subscribe to import progress state
    this.importProgressService.state$
      .pipe(takeUntil(this.destroy$))
      .subscribe(state => {
        this.state = state;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Close the progress box
   */
  closeProgressBox(): void {
    this.importProgressService.closeProgressBox();
  }

  /**
   * Download failed imports CSV
   */
  downloadFailedImportsCSV(): void {
    this.importProgressService.downloadFailedImportsCSV();
  }

  /**
   * Navigate to asset list page
   */
  goToAssetList(): void {
    this.router.navigate(['/assets/list']);
  }
}