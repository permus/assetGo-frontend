import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ExportService } from './export.service';
import { ReportsApiService } from './reports-api.service';
import { environment } from '../../../environments/environment';
import { ReportRunStatus, ExportFormat } from '../models/reports.models';

describe('ExportService', () => {
  let service: ExportService;
  let reportsApiService: any;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ReportsApiService', [
      'exportReport',
      'getExportStatus',
      'downloadExport',
      'cancelExport'
    ]);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ExportService,
        { provide: ReportsApiService, useValue: spy }
      ]
    });
    
    service = TestBed.inject(ExportService);
    reportsApiService = TestBed.inject(ReportsApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Export Report', () => {
    it('should export report and return run ID', (done) => {
      const mockResponse = {
        success: true,
        data: { run_id: 123, status: 'queued' }
      };

      reportsApiService.exportReport.and.returnValue(
        new Promise(resolve => resolve(mockResponse))
      );

      service.exportReport('assets.summary', 'xlsx' as ExportFormat, { page: 1 })
        .subscribe(runId => {
          expect(runId).toBe(123);
          expect(reportsApiService.exportReport).toHaveBeenCalledWith({
            report_key: 'assets.summary',
            format: 'xlsx',
            params: { page: 1 }
          });
          done();
        });
    });

    it('should handle export failure', (done) => {
      const mockError = new Error('Export failed');

      reportsApiService.exportReport.and.returnValue(
        new Promise((_, reject) => reject(mockError))
      );

      service.exportReport('assets.summary', 'xlsx' as ExportFormat, {})
        .subscribe({
          next: () => fail('Should have failed'),
          error: (error) => {
            expect(error).toBe(mockError);
            done();
          }
        });
    });
  });

  describe('Export Status', () => {
    it('should get export status', (done) => {
      const mockStatus: ReportRunStatus = {
        id: 123,
        report_key: 'assets.summary',
        format: 'xlsx',
        status: 'success',
        status_label: 'Completed',
        row_count: 100,
        execution_time_ms: 5000,
        execution_time_formatted: '5s',
        created_at: '2024-01-15T10:00:00Z',
        started_at: '2024-01-15T10:00:00Z',
        completed_at: '2024-01-15T10:00:05Z',
        download_url: 'http://example.com/download'
      };

      reportsApiService.getExportStatus.and.returnValue(
        new Promise(resolve => resolve(mockStatus))
      );

      service.getExportStatus(123).subscribe(status => {
        expect(status).toEqual(mockStatus);
        expect(reportsApiService.getExportStatus).toHaveBeenCalledWith(123);
        done();
      });
    });

    it('should start status polling for new exports', (done) => {
      const mockResponse = {
        success: true,
        data: { run_id: 123, status: 'queued' }
      };

      const mockStatus: ReportRunStatus = {
        id: 123,
        report_key: 'assets.summary',
        format: 'xlsx',
        status: 'success',
        status_label: 'Completed',
        row_count: 100,
        execution_time_ms: 5000,
        execution_time_formatted: '5s',
        created_at: '2024-01-15T10:00:00Z',
        started_at: '2024-01-15T10:00:00Z',
        completed_at: '2024-01-15T10:00:05Z'
      };

      reportsApiService.exportReport.and.returnValue(
        new Promise(resolve => resolve(mockResponse))
      );

      reportsApiService.getExportStatus.and.returnValue(
        new Promise(resolve => resolve(mockStatus))
      );

      service.exportReport('assets.summary', 'xlsx' as ExportFormat, {})
        .subscribe(runId => {
          expect(runId).toBe(123);
          
          // Check that status polling started
          setTimeout(() => {
            expect(reportsApiService.getExportStatus).toHaveBeenCalledWith(123);
            done();
          }, 100);
        });
    });
  });

  describe('Download Export', () => {
    it('should download export file', (done) => {
      const mockBlob = new Blob(['test data'], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      reportsApiService.downloadExport.and.returnValue(
        new Promise(resolve => resolve(mockBlob))
      );

      service.downloadExport(123, 'test-file.xlsx').subscribe(blob => {
        expect(blob).toEqual(mockBlob);
        expect(reportsApiService.downloadExport).toHaveBeenCalledWith(123);
        done();
      });
    });

    it('should generate filename if not provided', (done) => {
      const mockBlob = new Blob(['test data'], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      reportsApiService.downloadExport.and.returnValue(
        new Promise(resolve => resolve(mockBlob))
      );

      spyOn(service, 'generateFilename').and.returnValue('generated-filename.xlsx');

      service.downloadExport(123).subscribe(blob => {
        expect(blob).toEqual(mockBlob);
        done();
      });
    });
  });

  describe('Cancel Export', () => {
    it('should cancel export', (done) => {
      const mockResponse = {
        success: true,
        message: 'Export cancelled'
      };

      reportsApiService.cancelExport.and.returnValue(
        new Promise(resolve => resolve(mockResponse))
      );

      service.cancelExport(123).subscribe(success => {
        expect(success).toBe(true);
        expect(reportsApiService.cancelExport).toHaveBeenCalledWith(123);
        done();
      });
    });

    it('should handle cancel failure', (done) => {
      const mockResponse = {
        success: false,
        message: 'Cannot cancel completed export'
      };

      reportsApiService.cancelExport.and.returnValue(
        new Promise(resolve => resolve(mockResponse))
      );

      service.cancelExport(123).subscribe(success => {
        expect(success).toBe(false);
        done();
      });
    });
  });

  describe('Utility Methods', () => {
    it('should generate filename correctly', () => {
      const filename = service.generateFilename('assets.summary', 'xlsx');
      expect(filename).toContain('assets-summary');
      expect(filename).toContain('.xlsx');
      expect(filename).toMatch(/\d{4}-\d{2}-\d{2}/); // Date pattern
    });

    it('should get file extension from MIME type', () => {
      expect(service['getFileExtension']('application/pdf')).toBe('pdf');
      expect(service['getFileExtension']('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')).toBe('xlsx');
      expect(service['getFileExtension']('text/csv')).toBe('csv');
      expect(service['getFileExtension']('application/json')).toBe('json');
      expect(service['getFileExtension']('unknown/type')).toBe('file');
    });

    it('should get export progress', (done) => {
      const mockStatus: ReportRunStatus = {
        id: 123,
        report_key: 'assets.summary',
        format: 'xlsx',
        status: 'running',
        status_label: 'Processing',
        row_count: 50,
        execution_time_ms: 0,
        execution_time_formatted: '0s',
        created_at: '2024-01-15T10:00:00Z',
        started_at: '2024-01-15T10:00:00Z',
        completed_at: ''
      };

      // Mock the status subject
      service['exportStatusSubject'].next(new Map([[123, mockStatus]]));

      service.getExportProgress(123).subscribe(progress => {
        expect(progress).toBe(50);
        done();
      });
    });

    it('should check if export is completed', (done) => {
      const mockStatus: ReportRunStatus = {
        id: 123,
        report_key: 'assets.summary',
        format: 'xlsx',
        status: 'success',
        status_label: 'Completed',
        row_count: 100,
        execution_time_ms: 5000,
        execution_time_formatted: '5s',
        created_at: '2024-01-15T10:00:00Z',
        started_at: '2024-01-15T10:00:00Z',
        completed_at: '2024-01-15T10:00:05Z'
      };

      service['exportStatusSubject'].next(new Map([[123, mockStatus]]));

      service.isExportCompleted(123).subscribe(completed => {
        expect(completed).toBe(true);
        done();
      });
    });

    it('should get estimated time remaining', (done) => {
      const mockStatus: ReportRunStatus = {
        id: 123,
        report_key: 'assets.summary',
        format: 'xlsx',
        status: 'running',
        status_label: 'Processing',
        row_count: 100,
        execution_time_ms: 0,
        execution_time_formatted: '0s',
        created_at: '2024-01-15T10:00:00Z',
        started_at: '2024-01-15T10:00:00Z',
        completed_at: ''
      };

      service['exportStatusSubject'].next(new Map([[123, mockStatus]]));

      service.getEstimatedTimeRemaining(123).subscribe(time => {
        expect(time).toBe('1s'); // 100 rows / 100 = 1 second
        done();
      });
    });

    it('should clear completed exports', () => {
      const mockStatuses = new Map([
        [1, { id: 1, status: 'success' } as ReportRunStatus],
        [2, { id: 2, status: 'failed' } as ReportRunStatus],
        [3, { id: 3, status: 'running' } as ReportRunStatus]
      ]);

      service['exportStatusSubject'].next(mockStatuses);
      service.clearCompletedExports();

      service['exportStatusSubject'].subscribe(statusMap => {
        expect(statusMap.size).toBe(1);
        expect(statusMap.has(3)).toBe(true);
      });
    });

    it('should get active exports', (done) => {
      const mockStatuses = new Map([
        [1, { id: 1, status: 'queued' } as ReportRunStatus],
        [2, { id: 2, status: 'running' } as ReportRunStatus],
        [3, { id: 3, status: 'success' } as ReportRunStatus]
      ]);

      service['exportStatusSubject'].next(mockStatuses);

      service.getActiveExports().subscribe(exports => {
        expect(exports.length).toBe(2);
        expect(exports.some(e => e.id === 1)).toBe(true);
        expect(exports.some(e => e.id === 2)).toBe(true);
        expect(exports.some(e => e.id === 3)).toBe(false);
        done();
      });
    });

    it('should get export statistics', (done) => {
      const mockStatuses = new Map([
        [1, { id: 1, status: 'success' } as ReportRunStatus],
        [2, { id: 2, status: 'success' } as ReportRunStatus],
        [3, { id: 3, status: 'failed' } as ReportRunStatus],
        [4, { id: 4, status: 'running' } as ReportRunStatus],
        [5, { id: 5, status: 'queued' } as ReportRunStatus]
      ]);

      service['exportStatusSubject'].next(mockStatuses);

      service.getExportStats().subscribe(stats => {
        expect(stats.total).toBe(5);
        expect(stats.completed).toBe(2);
        expect(stats.failed).toBe(1);
        expect(stats.inProgress).toBe(2);
        done();
      });
    });
  });
});
