import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReportsApiService } from './reports-api.service';
import { environment } from '../../../environments/environment';
import { ReportConfig } from '../models/reports.models';

describe('ReportsApiService', () => {
  let service: ReportsApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReportsApiService]
    });
    service = TestBed.inject(ReportsApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Asset Reports', () => {
    it('should get asset summary report', () => {
      const mockResponse = {
        success: true,
        data: {
          assets: [],
          totals: { count: 0 },
          pagination: {}
        }
      };

      const config: ReportConfig = {
        dateRange: { start: '2024-01-01', end: '2024-12-31' },
        period: 'this_month',
        page: 1,
        pageSize: 50,
        locationIds: [],
        assetIds: [],
        userIds: [],
        statusIds: [],
        priorityIds: [],
        categoryIds: [],
        search: '',
        sortBy: '',
        sortDirection: 'asc'
      };

      service.getAssetSummary(config).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/assets/summary?page=1&page_size=50&date_from=2024-01-01&date_to=2024-12-31`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get asset utilization report', () => {
      const mockResponse = {
        success: true,
        data: {
          assets: [],
          pagination: {}
        }
      };

      const config: ReportConfig = {
        dateRange: { start: null, end: null },
        period: 'this_month',
        page: 1,
        pageSize: 50,
        locationIds: [],
        assetIds: [],
        userIds: [],
        statusIds: [],
        priorityIds: [],
        categoryIds: [],
        search: '',
        sortBy: '',
        sortDirection: 'asc'
      };

      service.getAssetUtilization(config).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/assets/utilization?page=1&page_size=50`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get asset depreciation report', () => {
      const mockResponse = {
        success: true,
        data: {
          assets: [],
          totals: {},
          pagination: {}
        }
      };

      const config: ReportConfig = {
        dateRange: { start: null, end: null },
        period: 'this_month',
        page: 1,
        pageSize: 50,
        locationIds: [],
        assetIds: [],
        userIds: [],
        statusIds: [],
        priorityIds: [],
        categoryIds: [],
        search: '',
        sortBy: '',
        sortDirection: 'asc'
      };

      service.getAssetDepreciation(config).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/assets/depreciation?page=1&page_size=50`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get asset warranty report', () => {
      const mockResponse = {
        success: true,
        data: {
          assets: [],
          summary: {},
          pagination: {}
        }
      };

      const config: ReportConfig = {
        dateRange: { start: null, end: null },
        period: 'this_month',
        page: 1,
        pageSize: 50,
        locationIds: [],
        assetIds: [],
        userIds: [],
        statusIds: [],
        priorityIds: [],
        categoryIds: [],
        search: '',
        sortBy: '',
        sortDirection: 'asc'
      };

      service.getAssetWarranty(config).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/assets/warranty?page=1&page_size=50`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get asset compliance report', () => {
      const mockResponse = {
        success: true,
        data: {
          assets: [],
          pagination: {}
        }
      };

      const config: ReportConfig = {
        dateRange: { start: null, end: null },
        period: 'this_month',
        page: 1,
        pageSize: 50,
        locationIds: [],
        assetIds: [],
        userIds: [],
        statusIds: [],
        priorityIds: [],
        categoryIds: [],
        search: '',
        sortBy: '',
        sortDirection: 'asc'
      };

      service.getAssetCompliance(config).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/assets/compliance?page=1&page_size=50`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get available asset reports', () => {
      const mockResponse = {
        success: true,
        data: {}
      };

      service.getAvailableAssetReports().subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/assets/available`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

  describe('Maintenance Reports', () => {
    it('should get maintenance summary report', () => {
      const mockResponse = {
        success: true,
        data: {
          work_orders: [],
          kpis: {},
          pagination: {}
        }
      };

      const config: ReportConfig = {
        dateRange: { start: null, end: null },
        period: 'this_month',
        page: 1,
        pageSize: 50,
        locationIds: [],
        assetIds: [],
        userIds: [],
        statusIds: [],
        priorityIds: [],
        categoryIds: [],
        search: '',
        sortBy: '',
        sortDirection: 'asc'
      };

      service.getMaintenanceSummary(config).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/maintenance/summary?page=1&page_size=50`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get maintenance compliance report', () => {
      const mockResponse = {
        success: true,
        data: {
          work_orders: [],
          pagination: {}
        }
      };

      const config: ReportConfig = {
        dateRange: { start: null, end: null },
        period: 'this_month',
        page: 1,
        pageSize: 50,
        locationIds: [],
        assetIds: [],
        userIds: [],
        statusIds: [],
        priorityIds: [],
        categoryIds: [],
        search: '',
        sortBy: '',
        sortDirection: 'asc'
      };

      service.getMaintenanceCompliance(config).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/maintenance/compliance?page=1&page_size=50`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get maintenance costs report', () => {
      const mockResponse = {
        success: true,
        data: {
          work_orders: [],
          cost_trends: [],
          pagination: {}
        }
      };

      const config: ReportConfig = {
        dateRange: { start: null, end: null },
        period: 'this_month',
        page: 1,
        pageSize: 50,
        locationIds: [],
        assetIds: [],
        userIds: [],
        statusIds: [],
        priorityIds: [],
        categoryIds: [],
        search: '',
        sortBy: '',
        sortDirection: 'asc'
      };

      service.getMaintenanceCosts(config).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/maintenance/costs?page=1&page_size=50`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get maintenance downtime report', () => {
      const mockResponse = {
        success: true,
        data: {
          work_orders: [],
          pagination: {}
        }
      };

      const config: ReportConfig = {
        dateRange: { start: null, end: null },
        period: 'this_month',
        page: 1,
        pageSize: 50,
        locationIds: [],
        assetIds: [],
        userIds: [],
        statusIds: [],
        priorityIds: [],
        categoryIds: [],
        search: '',
        sortBy: '',
        sortDirection: 'asc'
      };

      service.getMaintenanceDowntime(config).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/maintenance/downtime?page=1&page_size=50`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get maintenance failure analysis report', () => {
      const mockResponse = {
        success: true,
        data: {
          work_orders: [],
          pagination: {}
        }
      };

      const config: ReportConfig = {
        dateRange: { start: null, end: null },
        period: 'this_month',
        page: 1,
        pageSize: 50,
        locationIds: [],
        assetIds: [],
        userIds: [],
        statusIds: [],
        priorityIds: [],
        categoryIds: [],
        search: '',
        sortBy: '',
        sortDirection: 'asc'
      };

      service.getMaintenanceFailureAnalysis(config).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/maintenance/failure-analysis?page=1&page_size=50`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get maintenance technician performance report', () => {
      const mockResponse = {
        success: true,
        data: {
          technicians: []
        }
      };

      const config: ReportConfig = {
        dateRange: { start: null, end: null },
        period: 'this_month',
        page: 1,
        pageSize: 50,
        locationIds: [],
        assetIds: [],
        userIds: [],
        statusIds: [],
        priorityIds: [],
        categoryIds: [],
        search: '',
        sortBy: '',
        sortDirection: 'asc'
      };

      service.getMaintenanceTechnicianPerformance(config).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/maintenance/technician-performance?page=1&page_size=50`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get available maintenance reports', () => {
      const mockResponse = {
        success: true,
        data: {}
      };

      service.getAvailableMaintenanceReports().subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/maintenance/available`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

  describe('Export Functions', () => {
    it('should export report', () => {
      const mockResponse = {
        success: true,
        data: {
          run_id: 123,
          status: 'queued'
        }
      };

      const exportRequest = {
        report_key: 'assets.summary',
        format: 'xlsx' as any,
        params: { page: 1, page_size: 10 }
      };

      service.exportReport(exportRequest).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/export`);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(exportRequest);
      req.flush(mockResponse);
    });

    it('should get export status', () => {
      const mockResponse = {
        success: true,
        data: {
          id: 123,
          status: 'success',
          download_url: 'http://example.com/download'
        }
      };

      service.getExportStatus(123).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/runs/123`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should download export', () => {
      const mockBlob = new Blob(['test data'], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      service.downloadExport(123).subscribe(response => {
        expect(response).toEqual(mockBlob);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/runs/123/download`);
      expect(req.request.method).toBe('GET');
      expect(req.request.responseType).toBe('blob');
      req.flush(mockBlob);
    });

    it('should get export history', () => {
      const mockResponse = {
        success: true,
        data: {
          runs: [],
          pagination: {}
        }
      };

      service.getExportHistory(1, 20).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/history?page=1&page_size=20`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should cancel export', () => {
      const mockResponse = {
        success: true,
        message: 'Export cancelled'
      };

      service.cancelExport(123).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/reports/runs/123/cancel`);
      expect(req.request.method).toBe('DELETE');
      req.flush(mockResponse);
    });
  });

  describe('Filter Options', () => {
    it('should get locations', () => {
      const mockResponse = [
        { id: 1, name: 'Location 1', full_path: 'Building A > Floor 1' }
      ];

      service.getLocations().subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/locations`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get assets', () => {
      const mockResponse = [
        { id: 1, name: 'Asset 1', status: 'active', location: 'Location 1' }
      ];

      service.getAssets().subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/assets`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get users', () => {
      const mockResponse = [
        { id: 1, name: 'User 1', email: 'user1@example.com' }
      ];

      service.getUsers().subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/users`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get work order statuses', () => {
      const mockResponse = [
        { id: 1, name: 'Open', slug: 'open' }
      ];

      service.getWorkOrderStatuses().subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/work-order-statuses`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get work order priorities', () => {
      const mockResponse = [
        { id: 1, name: 'High', slug: 'high' }
      ];

      service.getWorkOrderPriorities().subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/work-order-priorities`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get work order categories', () => {
      const mockResponse = [
        { id: 1, name: 'Maintenance', slug: 'maintenance' }
      ];

      service.getWorkOrderCategories().subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/work-order-categories`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get asset categories', () => {
      const mockResponse = [
        { id: 1, name: 'Equipment', slug: 'equipment' }
      ];

      service.getAssetCategories().subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/asset-categories`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });

    it('should get asset statuses', () => {
      const mockResponse = [
        { id: 1, name: 'Active', slug: 'active' }
      ];

      service.getAssetStatuses().subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpMock.expectOne(`${environment.apiUrl}/asset-statuses`);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);
    });
  });

  describe('Utility Methods', () => {
    it('should format currency correctly', () => {
      expect(service.formatCurrency(1000)).toBe('1,000.00 AED');
      expect(service.formatCurrency(1000, 'USD')).toBe('1,000.00 USD');
    });

    it('should format percentage correctly', () => {
      expect(service.formatPercentage(75.5)).toBe('75.50%');
      expect(service.formatPercentage(75.5, 1)).toBe('75.5%');
    });

    it('should format number correctly', () => {
      expect(service.formatNumber(1000)).toBe('1,000');
      expect(service.formatNumber(1000.5, 1)).toBe('1,000.5');
    });

    it('should format date correctly', () => {
      const date = '2024-01-15';
      const formatted = service.formatDate(date);
      expect(formatted).toContain('15');
      expect(formatted).toContain('01');
      expect(formatted).toContain('2024');
    });

    it('should format date time correctly', () => {
      const date = '2024-01-15T10:30:00Z';
      const formatted = service.formatDateTime(date);
      expect(formatted).toContain('15');
      expect(formatted).toContain('01');
      expect(formatted).toContain('2024');
    });

    it('should return correct status color', () => {
      expect(service.getStatusColor('active')).toBe('text-green-600 bg-green-100');
      expect(service.getStatusColor('inactive')).toBe('text-gray-600 bg-gray-100');
      expect(service.getStatusColor('unknown')).toBe('text-gray-600 bg-gray-100');
    });

    it('should return correct priority color', () => {
      expect(service.getPriorityColor('high')).toBe('text-orange-600 bg-orange-100');
      expect(service.getPriorityColor('low')).toBe('text-green-600 bg-green-100');
      expect(service.getPriorityColor('unknown')).toBe('text-gray-600 bg-gray-100');
    });
  });
});
