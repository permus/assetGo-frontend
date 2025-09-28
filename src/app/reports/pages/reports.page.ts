import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ReportsApiService } from '../services/reports-api.service';
import { ExportService } from '../services/export.service';
import { ReportCategory, ReportConfig, DateRange, ReportPeriod, AssetSummaryResponse, MaintenanceSummaryResponse } from '../models/reports.models';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss']
})
export class ReportsPage implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  // State
  activeTab: ReportCategory = 'assets';
  isLoading = false;
  hasData = false;
  errorMessage: string | null = null;
  showExportPanel = false;

  // Data
  reportData: any[] = [];
  pagination: any = null;
  kpiCards: any[] = [];
  selectedReport: string = '';

  // Configuration
  reportConfig: ReportConfig = {
    dateRange: {
      start: null,
      end: null
    },
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

  // Export configuration
  exportFormat: string = 'pdf';

  // Filter configurations for different report types
  maintenanceFilters = {
    period: 'last_month',
    type: 'all'
  };

  inventoryFilters = {
    category: 'all',
    location: 'all'
  };

  financialFilters = {
    period: 'monthly',
    currency: 'AED'
  };

  // Available tabs
  tabs = [
    { id: 'assets', label: 'Asset Reports', icon: 'package' },
    { id: 'maintenance', label: 'Maintenance Reports', icon: 'wrench' },
    { id: 'inventory', label: 'Inventory Reports', icon: 'box' },
    { id: 'financial', label: 'Financial Reports', icon: 'dollar-sign' },
    { id: 'custom', label: 'Custom Reports', icon: 'settings' }
  ];

  // Report data for each category
  assetReports = [
    {
      id: 'asset-summary',
      title: 'Asset Summary Report',
      description: 'Complete overview of all assets with status, location, and financial details',
      estimatedTime: '~5 min'
    },
    {
      id: 'asset-utilization',
      title: 'Asset Utilization Report',
      description: 'Analysis of asset usage patterns and efficiency metrics',
      estimatedTime: '~3 min'
    },
    {
      id: 'depreciation-analysis',
      title: 'Depreciation Analysis',
      description: 'Asset depreciation calculations and current value assessments',
      estimatedTime: '~4 min'
    },
    {
      id: 'warranty-status',
      title: 'Warranty Status Report',
      description: 'Assets under warranty, expiring warranties, and expired coverage',
      estimatedTime: '~2 min'
    },
    {
      id: 'compliance-report',
      title: 'Compliance Report',
      description: 'Asset compliance status, certifications, and regulatory requirements',
      estimatedTime: '~6 min'
    }
  ];

  maintenanceReports = [
    {
      id: 'maintenance-summary',
      title: 'Maintenance Summary',
      description: 'Overview of all maintenance activities, costs, and completion rates',
      estimatedTime: '~4 min'
    },
    {
      id: 'preventive-compliance',
      title: 'Preventive Maintenance Compliance',
      description: 'Track adherence to scheduled preventive maintenance plans',
      estimatedTime: '~3 min'
    },
    {
      id: 'maintenance-costs',
      title: 'Maintenance Cost Analysis',
      description: 'Detailed breakdown of maintenance expenses by asset, type, and time',
      estimatedTime: '~5 min'
    },
    {
      id: 'equipment-downtime',
      title: 'Equipment Downtime Report',
      description: 'Analysis of asset downtime duration and impact on operations',
      estimatedTime: '~4 min'
    },
    {
      id: 'failure-analysis',
      title: 'Failure Analysis Report',
      description: 'Root cause analysis and failure patterns across assets',
      estimatedTime: '~6 min'
    },
    {
      id: 'technician-performance',
      title: 'Technician Performance',
      description: 'Productivity metrics and work quality assessment for maintenance teams',
      estimatedTime: '~4 min'
    }
  ];

  inventoryReports = [
    {
      id: 'current-stock',
      title: 'Current Stock Levels',
      description: 'Real-time inventory levels across all locations and categories',
      estimatedTime: '~2 min'
    },
    {
      id: 'abc-analysis',
      title: 'ABC Analysis Report',
      description: 'Classification of inventory items by value and importance',
      estimatedTime: '~4 min'
    },
    {
      id: 'slow-moving',
      title: 'Slow Moving Inventory',
      description: 'Items with low turnover rates and aging analysis',
      estimatedTime: '~3 min'
    },
    {
      id: 'reorder-analysis',
      title: 'Reorder Point Analysis',
      description: 'Items below reorder points and suggested purchase quantities',
      estimatedTime: '~2 min'
    },
    {
      id: 'consumption-trends',
      title: 'Consumption Trends',
      description: 'Usage patterns and demand forecasting for parts and materials',
      estimatedTime: '~5 min'
    },
    {
      id: 'vendor-performance',
      title: 'Vendor Performance',
      description: 'Supplier reliability, lead times, and cost analysis',
      estimatedTime: '~4 min'
    },
    {
      id: 'inventory-valuation',
      title: 'Inventory Valuation',
      description: 'Total inventory value, cost breakdown, and financial impact',
      estimatedTime: '~3 min'
    }
  ];

  financialReports = [
    {
      id: 'total-cost-ownership',
      title: 'Total Cost of Ownership',
      description: 'Complete lifecycle cost analysis including acquisition, maintenance, and disposal',
      estimatedTime: '~8 min'
    },
    {
      id: 'budget-vs-actual',
      title: 'Budget vs Actual Analysis',
      description: 'Comparison of planned vs actual spending across departments and projects',
      estimatedTime: '~5 min'
    },
    {
      id: 'depreciation-schedule',
      title: 'Depreciation Schedule',
      description: 'Asset depreciation calculations and remaining book values',
      estimatedTime: '~6 min'
    },
    {
      id: 'maintenance-cost-breakdown',
      title: 'Maintenance Cost Breakdown',
      description: 'Detailed analysis of maintenance expenses by asset, type, and period',
      estimatedTime: '~4 min'
    },
    {
      id: 'return-on-investment',
      title: 'Return on Investment',
      description: 'ROI calculations for assets, upgrades, and maintenance initiatives',
      estimatedTime: '~7 min'
    },
    {
      id: 'cost-center-analysis',
      title: 'Cost Center Analysis',
      description: 'Financial performance breakdown by department and location',
      estimatedTime: '~5 min'
    }
  ];

  // Custom report data
  customReport = {
    name: '',
    format: 'pdf',
    description: '',
    dataSource: '',
    filters: ''
  };

  dataSources = [
    { id: 'assets', name: 'Assets', fieldCount: 5 },
    { id: 'inventory', name: 'Inventory', fieldCount: 5 },
    { id: 'work_orders', name: 'Work Orders', fieldCount: 5 },
    { id: 'maintenance', name: 'Maintenance Records', fieldCount: 5 },
    { id: 'locations', name: 'Locations', fieldCount: 4 }
  ];

  savedReports = [
    {
      id: 'high-value-assets',
      name: 'High Value Assets by Location',
      description: 'Assets worth over $10K grouped by location',
      frequency: 'Weekly',
      lastRun: '2 days ago'
    },
    {
      id: 'maintenance-cost-trends',
      name: 'Maintenance Cost Trends',
      description: 'Monthly maintenance costs with year-over-year comparison',
      frequency: 'Monthly',
      lastRun: '1 week ago'
    },
    {
      id: 'inventory-turnover',
      name: 'Inventory Turnover Analysis',
      description: 'Parts consumption patterns and reorder recommendations',
      frequency: 'Bi-weekly',
      lastRun: '3 days ago'
    }
  ];

  quickTemplates = [
    { id: 'monthly-asset-summary', name: 'Monthly Asset Summary' },
    { id: 'cost-analysis-department', name: 'Cost Analysis by Department' },
    { id: 'maintenance-performance', name: 'Maintenance Performance' }
  ];

  constructor(
    private reportsApi: ReportsApiService,
    private exportService: ExportService
  ) {}

  getCurrentTime(): string {
    return new Date().toISOString();
  }

  ngOnInit(): void {
    console.log('ReportsPage ngOnInit called');
    console.log('Component initialized successfully');
    this.initializeDateRange();
    this.loadReportData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Initialize date range based on selected period
   */
  private initializeDateRange(): void {
    const now = new Date();
    const period = this.reportConfig.period;

    switch (period) {
      case 'today':
        this.reportConfig.dateRange = {
          start: now.toISOString().split('T')[0],
          end: now.toISOString().split('T')[0]
        };
        break;
      case 'yesterday':
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        this.reportConfig.dateRange = {
          start: yesterday.toISOString().split('T')[0],
          end: yesterday.toISOString().split('T')[0]
        };
        break;
      case 'this_week':
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay());
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        this.reportConfig.dateRange = {
          start: startOfWeek.toISOString().split('T')[0],
          end: endOfWeek.toISOString().split('T')[0]
        };
        break;
      case 'last_week':
        const lastWeekStart = new Date(now);
        lastWeekStart.setDate(now.getDate() - now.getDay() - 7);
        const lastWeekEnd = new Date(lastWeekStart);
        lastWeekEnd.setDate(lastWeekStart.getDate() + 6);
        this.reportConfig.dateRange = {
          start: lastWeekStart.toISOString().split('T')[0],
          end: lastWeekEnd.toISOString().split('T')[0]
        };
        break;
      case 'this_month':
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        this.reportConfig.dateRange = {
          start: startOfMonth.toISOString().split('T')[0],
          end: endOfMonth.toISOString().split('T')[0]
        };
        break;
      case 'last_month':
        const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const lastMonthEnd = new Date(now.getFullYear(), now.getMonth(), 0);
        this.reportConfig.dateRange = {
          start: lastMonthStart.toISOString().split('T')[0],
          end: lastMonthEnd.toISOString().split('T')[0]
        };
        break;
      case 'this_quarter':
        const quarter = Math.floor(now.getMonth() / 3);
        const startOfQuarter = new Date(now.getFullYear(), quarter * 3, 1);
        const endOfQuarter = new Date(now.getFullYear(), quarter * 3 + 3, 0);
        this.reportConfig.dateRange = {
          start: startOfQuarter.toISOString().split('T')[0],
          end: endOfQuarter.toISOString().split('T')[0]
        };
        break;
      case 'last_quarter':
        const lastQuarter = Math.floor(now.getMonth() / 3) - 1;
        const lastQuarterStart = new Date(now.getFullYear(), lastQuarter * 3, 1);
        const lastQuarterEnd = new Date(now.getFullYear(), lastQuarter * 3 + 3, 0);
        this.reportConfig.dateRange = {
          start: lastQuarterStart.toISOString().split('T')[0],
          end: lastQuarterEnd.toISOString().split('T')[0]
        };
        break;
      case 'this_year':
        const startOfYear = new Date(now.getFullYear(), 0, 1);
        const endOfYear = new Date(now.getFullYear(), 11, 31);
        this.reportConfig.dateRange = {
          start: startOfYear.toISOString().split('T')[0],
          end: endOfYear.toISOString().split('T')[0]
        };
        break;
      case 'last_year':
        const lastYearStart = new Date(now.getFullYear() - 1, 0, 1);
        const lastYearEnd = new Date(now.getFullYear() - 1, 11, 31);
        this.reportConfig.dateRange = {
          start: lastYearStart.toISOString().split('T')[0],
          end: lastYearEnd.toISOString().split('T')[0]
        };
        break;
      case 'ytd':
        const ytdStart = new Date(now.getFullYear(), 0, 1);
        this.reportConfig.dateRange = {
          start: ytdStart.toISOString().split('T')[0],
          end: now.toISOString().split('T')[0]
        };
        break;
    }
  }

  /**
   * Load report data based on active tab
   */
  private loadReportData(): void {
    console.log('loadReportData called, activeTab:', this.activeTab);
    this.isLoading = true;
    this.errorMessage = null;

    let request$: any;

    switch (this.activeTab) {
      case 'assets':
        console.log('Loading asset summary...');
        request$ = this.reportsApi.getAssetSummary(this.reportConfig);
        break;
      case 'maintenance':
        request$ = this.reportsApi.getMaintenanceSummary(this.reportConfig);
        break;
      case 'inventory':
        // TODO: Implement inventory reports
        this.isLoading = false;
        this.hasData = false;
        return;
      case 'financial':
        // TODO: Implement financial reports
        this.isLoading = false;
        this.hasData = false;
        return;
      case 'custom':
        // TODO: Implement custom reports
        this.isLoading = false;
        this.hasData = false;
        return;
      default:
        this.isLoading = false;
        this.hasData = false;
        return;
    }

    if (request$) {
      request$.pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (response: AssetSummaryResponse | MaintenanceSummaryResponse) => {
          console.log('Report data received:', response);
          this.processReportData(response);
          this.isLoading = false;
        },
        error: (error: any) => {
          console.error('Error loading report data:', error);
          console.error('Error status:', error.status);
          console.error('Error message:', error.message);
          console.error('Error details:', error);
          this.errorMessage = `Failed to load report data: ${error.status} - ${error.message}`;
          this.isLoading = false;
          this.hasData = false;
        }
      });
    }
  }

  /**
   * Process report data and extract KPIs
   */
  private processReportData(response: AssetSummaryResponse | MaintenanceSummaryResponse): void {
    console.log('Processing report data:', response);
    
    // Handle different response types
    if ('assets' in response) {
      // AssetSummaryResponse
      this.reportData = response.assets || [];
    } else if ('work_orders' in response) {
      // MaintenanceSummaryResponse
      this.reportData = response.work_orders || [];
    } else {
      this.reportData = [];
    }
    
    this.pagination = response.pagination || null;
    this.hasData = this.reportData.length > 0;
    console.log('Processed data - reportData:', this.reportData, 'hasData:', this.hasData);

    // Extract KPIs based on response type
    if ('totals' in response && response.totals) {
      // AssetSummaryResponse
      this.kpiCards = this.buildKPICardsFromTotals(response.totals);
    } else if ('kpis' in response && response.kpis) {
      // MaintenanceSummaryResponse
      this.kpiCards = this.buildKPICardsFromKPIs(response.kpis);
    } else {
      this.kpiCards = [];
    }
  }

  /**
   * Build KPI cards from totals data
   */
  private buildKPICardsFromTotals(totals: any): any[] {
    return [
      {
        title: 'Total Assets',
        value: totals.total_count || 0,
        icon: 'package',
        trend: null
      },
      {
        title: 'Total Value',
        value: `$${(totals.total_value || 0).toLocaleString()}`,
        icon: 'dollar-sign',
        trend: null
      },
      {
        title: 'Active Assets',
        value: totals.active_count || 0,
        icon: 'check-circle',
        trend: null
      },
      {
        title: 'In Maintenance',
        value: totals.maintenance_count || 0,
        icon: 'wrench',
        trend: null
      }
    ];
  }

  /**
   * Build KPI cards from KPIs data
   */
  private buildKPICardsFromKPIs(kpis: any): any[] {
    return [
      {
        title: 'MTTR',
        value: `${kpis.mttr || 0}h`,
        icon: 'clock',
        trend: null
      },
      {
        title: 'MTBF',
        value: `${kpis.mtbf || 0}h`,
        icon: 'trending-up',
        trend: null
      },
      {
        title: 'Compliance',
        value: `${kpis.compliance || 0}%`,
        icon: 'calendar',
        trend: null
      },
      {
        title: 'Cost/Asset',
        value: `$${kpis.cost_per_asset || 0}K`,
        icon: 'dollar-sign',
        trend: null
      }
    ];
  }

  /**
   * Handle tab change
   */
  onTabChange(tabId: ReportCategory): void {
    this.activeTab = tabId;
    this.selectedReport = '';
    this.loadReportData();
  }

  /**
   * Handle refresh
   */
  onRefresh(): void {
    this.loadReportData();
  }

  /**
   * Handle export
   */
  onExport(): void {
    this.showExportPanel = true;
  }

  /**
   * Handle config change
   */
  onConfigChange(config: ReportConfig): void {
    this.reportConfig = { ...config };
  }

  /**
   * Handle apply filters
   */
  onApplyFilters(): void {
    this.loadReportData();
  }

  /**
   * Handle reset filters
   */
  onResetFilters(): void {
    this.reportConfig = {
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
    this.initializeDateRange();
    this.loadReportData();
  }

  /**
   * Handle page change
   */
  onPageChange(page: number): void {
    this.reportConfig.page = page;
    this.loadReportData();
  }

  /**
   * Handle page size change
   */
  onPageSizeChange(pageSize: number): void {
    this.reportConfig.pageSize = pageSize;
    this.reportConfig.page = 1;
    this.loadReportData();
  }

  /**
   * Handle sort change
   */
  onSortChange(sort: { field: string; direction: 'asc' | 'desc' }): void {
    this.reportConfig.sortBy = sort.field;
    this.reportConfig.sortDirection = sort.direction;
    this.loadReportData();
  }

  /**
   * Handle close export panel
   */
  onCloseExportPanel(): void {
    this.showExportPanel = false;
  }

  /**
   * Handle export report
   */
  onExportReport(exportData: any): void {
    const reportKey = this.getReportKey();
    this.exportService.exportReport(reportKey, exportData.format as any, exportData.params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (runId) => {
          console.log('Export started:', runId);
          this.showExportPanel = false;
        },
        error: (error) => {
          console.error('Export failed:', error);
        }
      });
  }

  /**
   * Get report key for export
   */
  private getReportKey(): string {
    return `${this.activeTab}.${this.selectedReport || 'summary'}`;
  }

  /**
   * Generate quick report
   */
  generateQuickReport(type: string): void {
    console.log('Generating quick report:', type);
    // TODO: Implement quick report generation
  }

  /**
   * Run custom report
   */
  runCustomReport(): void {
    console.log('Running custom report:', this.customReport);
    // TODO: Implement custom report execution
  }

  /**
   * Save custom report
   */
  saveCustomReport(): void {
    console.log('Saving custom report:', this.customReport);
    // TODO: Implement custom report saving
  }

  /**
   * Edit saved report
   */
  editReport(report: any): void {
    console.log('Editing report:', report);
    // TODO: Implement report editing
  }

  /**
   * Run saved report
   */
  runReport(report: any): void {
    console.log('Running saved report:', report);
    // TODO: Implement saved report execution
  }

  /**
   * Use quick template
   */
  useTemplate(template: any): void {
    console.log('Using template:', template);
    // TODO: Implement template usage
  }
}
