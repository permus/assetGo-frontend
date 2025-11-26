import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownOption } from '../../shared/components/global-dropdown/global-dropdown.component';
import { ReportsExportPanelComponent } from '../components/reports-export-panel.component';
import { PieChartComponent } from '../components/charts/pie-chart.component';
import { BarChartComponent } from '../components/charts/bar-chart.component';
import { Subject, takeUntil } from 'rxjs';
import { ReportsApiService } from '../services/reports-api.service';
import { ExportService } from '../services/export.service';
import { ReportCategory, ReportConfig, DateRange, ReportPeriod, AssetSummaryResponse, MaintenanceSummaryResponse } from '../models/reports.models';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReportsExportPanelComponent, 
    PieChartComponent,
    BarChartComponent
  ],
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss']
})
export class ReportsPage implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private activePollIntervals: Map<number, any> = new Map();

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
  selectedReports: string[] = [];
  isGenerating: boolean = false;
  successMessage: string = '';
  assetSummaryData: AssetSummaryResponse | null = null;
  maintenanceSummaryData: MaintenanceSummaryResponse | null = null;
  
  // Last completed export tracking
  lastCompletedRunId: number | null = null;
  lastCompletedDownloadUrl: string | null = null;
  lastCompletedReportKey: string | null = null;
  lastCompletedFormat: string | null = null;

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

  // Custom select options/state for Maintenance
  maintenancePeriodOptions: DropdownOption[] = [
    { id: 'last_month', name: 'Last Month' },
    { id: 'this_month', name: 'This Month' },
    { id: 'last_quarter', name: 'Last Quarter' },
    { id: 'this_quarter', name: 'This Quarter' }
  ];
  selectedMaintenancePeriod: DropdownOption | null = this.maintenancePeriodOptions[0];

  maintenanceTypeOptions: DropdownOption[] = [
    { id: 'all', name: 'All Types' },
    { id: 'preventive', name: 'Preventive' },
    { id: 'corrective', name: 'Corrective' },
    { id: 'emergency', name: 'Emergency' }
  ];
  selectedMaintenanceType: DropdownOption | null = this.maintenanceTypeOptions[0];

  inventoryFilters = {
    category: 'all',
    location: 'all'
  };

  // Custom select options/state for Inventory
  inventoryCategoryOptions: DropdownOption[] = [
    { id: 'all', name: 'All Categories' },
    { id: 'parts', name: 'Parts' },
    { id: 'supplies', name: 'Supplies' },
    { id: 'tools', name: 'Tools' }
  ];
  selectedInventoryCategory: DropdownOption | null = this.inventoryCategoryOptions[0];

  inventoryLocationOptions: DropdownOption[] = [
    { id: 'all', name: 'All Locations' },
    { id: 'warehouse', name: 'Warehouse' },
    { id: 'office', name: 'Office' },
    { id: 'field', name: 'Field' }
  ];
  selectedInventoryLocation: DropdownOption | null = this.inventoryLocationOptions[0];

  financialFilters = {
    period: 'monthly',
    currency: 'AED'
  };

  // Global report key maps to avoid redeclarations and scope issues
  private readonly maintenanceKeyMap: Record<string, string> = {
    'maintenance-summary': 'maintenance.summary',
    'preventive-compliance': 'maintenance.compliance',
    'maintenance-costs': 'maintenance.costs',
    'equipment-downtime': 'maintenance.downtime',
    'failure-analysis': 'maintenance.failure_analysis',
    'technician-performance': 'maintenance.technician_performance'
  };

  private readonly assetKeyMap: Record<string, string> = {
    'asset-summary': 'assets.asset-summary',
    'asset-utilization': 'assets.asset-utilization',
    'depreciation-analysis': 'assets.depreciation-analysis',
    'warranty-status': 'assets.warranty-status',
    'compliance-report': 'assets.compliance-report'
  };

  private readonly financialKeyMap: Record<string, string> = {
    'total-cost-ownership': 'financial.total_cost_ownership',
    'maintenance-cost-breakdown': 'financial.maintenance_cost_breakdown',
    'budget-vs-actual': 'financial.budget.vs.actual'
  };

  private readonly inventoryKeyMap: Record<string, string> = {
    'current-stock': 'inventory.current.stock',
    'abc-analysis': 'inventory.abc.analysis',
    'slow-moving': 'inventory.slow_moving',
    'reorder-analysis': 'inventory.reorder_analysis'
  };

  // Custom select options/state for Financial
  financialPeriodOptions: DropdownOption[] = [
    { id: 'monthly', name: 'Monthly' },
    { id: 'quarterly', name: 'Quarterly' },
    { id: 'yearly', name: 'Yearly' }
  ];
  selectedFinancialPeriod: DropdownOption | null = this.financialPeriodOptions[0];

  financialCurrencyOptions: DropdownOption[] = [
    { id: 'AED', name: 'AED (Dirham)' },
    { id: 'USD', name: 'USD (Dollar)' },
    { id: 'EUR', name: 'EUR (Euro)' }
  ];
  selectedFinancialCurrency: DropdownOption | null = this.financialCurrencyOptions[0];

  // Available tabs
  tabs = [
    { id: 'assets', label: 'Asset Reports', icon: 'package' },
    { id: 'maintenance', label: 'Maintenance Reports', icon: 'wrench' },
    { id: 'inventory', label: 'Inventory Reports', icon: 'box' },
    { id: 'financial', label: 'Financial Reports', icon: 'dollar-sign' }
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
    // Stop all active polling
    this.activePollIntervals.forEach((interval, runId) => {
      clearInterval(interval);
    });
    this.activePollIntervals.clear();
    
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
      // AssetSummaryResponse - store the full response for charts
      this.assetSummaryData = response as AssetSummaryResponse;
      this.reportData = response.assets || [];
    } else if ('work_orders' in response) {
      // MaintenanceSummaryResponse - store the full response for charts
      this.maintenanceSummaryData = response as MaintenanceSummaryResponse;
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
    this.selectedReports = [];
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

  // Maintenance dropdown handlers
  onSelectMaintenancePeriod(option: DropdownOption): void {
    this.selectedMaintenancePeriod = option;
    this.maintenanceFilters.period = option?.id ?? this.maintenanceFilters.period;
  }

  onSelectMaintenanceType(option: DropdownOption): void {
    this.selectedMaintenanceType = option;
    this.maintenanceFilters.type = option?.id ?? this.maintenanceFilters.type;
  }

  // Inventory dropdown handlers
  onSelectInventoryCategory(option: DropdownOption): void {
    this.selectedInventoryCategory = option;
    this.inventoryFilters.category = option?.id ?? this.inventoryFilters.category;
  }

  onSelectInventoryLocation(option: DropdownOption): void {
    this.selectedInventoryLocation = option;
    this.inventoryFilters.location = option?.id ?? this.inventoryFilters.location;
  }

  // Financial dropdown handlers
  onSelectFinancialPeriod(option: DropdownOption): void {
    this.selectedFinancialPeriod = option;
    this.financialFilters.period = option?.id ?? this.financialFilters.period;
  }

  onSelectFinancialCurrency(option: DropdownOption): void {
    this.selectedFinancialCurrency = option;
    this.financialFilters.currency = option?.id ?? this.financialFilters.currency;
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

  /**
   * Handle report selection change
   */
  onReportSelectionChange(reportId: string, event: any): void {
    const isChecked = event.target.checked;
    
    if (isChecked) {
      // Add to selected reports if not already present
      if (!this.selectedReports.includes(reportId)) {
        this.selectedReports.push(reportId);
      }
    } else {
      // Remove from selected reports
      this.selectedReports = this.selectedReports.filter(id => id !== reportId);
    }
    
    // Keep selectedReport for backward compatibility (first selected)
    this.selectedReport = this.selectedReports.length > 0 ? this.selectedReports[0] : '';
    
    console.log('Report selection changed:', reportId, 'checked:', isChecked);
    console.log('Selected reports:', this.selectedReports);
  }

  /**
   * Check if a report is selected
   */
  isReportSelected(reportId: string): boolean {
    return this.selectedReports.includes(reportId);
  }

  /**
   * Generate selected reports
   */
  onGenerateSelectedReports(): void {
    if (this.selectedReports.length === 0) {
      console.warn('No reports selected');
      return;
    }

    console.log('Generating selected reports:', this.selectedReports);
    console.log('Export format:', this.exportFormat);
    console.log('Date range:', this.reportConfig.dateRange);

    // Set loading state
    this.isGenerating = true;
    this.errorMessage = '';
    this.successMessage = '';

    // For now, handle only the first selected report
    // TODO: Handle multiple reports if needed
    const reportId = this.selectedReports[0];
    // Map maintenance UI ids to backend keys
    const maintenanceMap: Record<string, string> = {
      'maintenance-summary': 'maintenance.summary',
      'preventive-compliance': 'maintenance.compliance',
      'maintenance-costs': 'maintenance.costs',
      'equipment-downtime': 'maintenance.downtime',
      'failure-analysis': 'maintenance.failure_analysis',
      'technician-performance': 'maintenance.technician_performance'
    };
    const assetMap: Record<string, string> = {
      'asset-summary': 'assets.asset-summary',
      'asset-utilization': 'assets.asset-utilization',
      'depreciation-analysis': 'assets.depreciation-analysis',
      'warranty-status': 'assets.warranty-status',
      'compliance-report': 'assets.compliance-report'
    };
    const financialMap: Record<string, string> = {
      'total-cost-ownership': 'financial.total_cost_ownership',
      'maintenance-cost-breakdown': 'financial.maintenance_cost_breakdown'
    };
    let reportKey = maintenanceMap[reportId] || assetMap[reportId] || financialMap[reportId] || reportId;
    if (!reportKey.includes('.')) {
      reportKey = `${this.activeTab}.${reportKey.replace(/-/g, '.')}`;
    }
    const exportParams = {
      date_from: this.reportConfig.dateRange.start,
      date_to: this.reportConfig.dateRange.end,
      format: this.exportFormat
    };

      // Call the API to start the export
      this.reportsApi.exportReport({
        report_key: reportKey,
        format: this.exportFormat as any, // Type assertion for now
        params: exportParams
      }).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (response) => {
          if (response.success && response.data) {
            console.log('Export job queued successfully:', response.data);
            
            // Start polling for the export status
            this.pollExportStatus(response.data.run_id, reportKey);
          } else {
            this.errorMessage = 'Export failed: ' + (response.error || 'Unknown error');
            this.isGenerating = false;
          }
        },
        error: (error) => {
          console.error('Export failed:', error);
          this.errorMessage = 'Export failed: ' + error.message;
          this.isGenerating = false;
        }
      });
  }

  /**
   * Poll export status until completion
   */
  private pollExportStatus(runId: number, reportKey: string): void {
    // Stop any existing polling for this runId
    this.stopPolling(runId);
    
    const maxPolls = 30; // 60 seconds max (30 polls * 2 seconds)
    let pollCount = 0;
    let isPolling = true;
    let isRequestInProgress = false;
    
    const poll = () => {
      if (!isPolling || isRequestInProgress) {
        return; // Skip if polling stopped or request in progress
      }
      
      pollCount++;
      isRequestInProgress = true;
      console.log(`[Poll ${pollCount}/${maxPolls}] Checking export status for run ${runId}...`);
      
      this.reportsApi.getExportStatus(runId).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (statusResponse) => {
          isRequestInProgress = false;
          
          if (!isPolling) return; // Stop processing if polling was cancelled
          
          if (statusResponse.success && statusResponse.data) {
            const status = statusResponse.data;
            console.log(`[Poll ${pollCount}] Status:`, status.status, '| Data:', status);
            
            if (status.status === 'success') {
              // Export completed successfully
              this.stopPolling(runId);
              this.isGenerating = false;
              
              console.log('✅ Export completed! Download URL:', status.download_url);
              
              const downloadUrl = status.download_url;
              const format = status.format;
              
              if (downloadUrl && format) {
                // Store completed export info for download button
                this.lastCompletedRunId = runId;
                this.lastCompletedDownloadUrl = downloadUrl;
                this.lastCompletedReportKey = status.report_key || reportKey;
                this.lastCompletedFormat = format;
                
                // Trigger download immediately
                // TypeScript narrowing: we've checked downloadUrl and format are truthy
                const reportKeyForDownload = status.report_key || reportKey;
                
                setTimeout(() => {
                  console.log('🚀 Triggering download...');
                  // Use non-null assertion since we've verified they exist above
                  this.downloadFile(downloadUrl!, reportKeyForDownload, format!);
                }, 300);
                this.successMessage = `Report generated successfully! (${status.execution_time_formatted || ''})`;
              } else {
                console.error('❌ No download URL or format provided in status response');
                this.errorMessage = 'Export completed but no download URL or format provided';
                // Clear last completed export if no download URL
                this.lastCompletedDownloadUrl = null;
              }
            } else if (status.status === 'failed') {
              // Export failed
              this.stopPolling(runId);
              this.isGenerating = false;
              this.errorMessage = 'Export failed: ' + (status.error_message || 'Unknown error');
            } else if (pollCount >= maxPolls) {
              // Timeout
              this.stopPolling(runId);
              this.isGenerating = false;
              this.errorMessage = 'Export timed out. Please check the export status manually.';
            }
            // Continue polling for 'queued' or 'running' status
          } else {
            // API error
            console.error('❌ Status response error:', statusResponse);
            if (pollCount >= maxPolls) {
              this.stopPolling(runId);
              this.isGenerating = false;
              this.errorMessage = 'Failed to check export status: ' + (statusResponse.error || 'Unknown error');
            }
          }
        },
        error: (error) => {
          isRequestInProgress = false;
          console.error('❌ Error polling export status:', error);
          if (pollCount >= maxPolls) {
            this.stopPolling(runId);
            this.isGenerating = false;
            this.errorMessage = 'Error checking export status: ' + error.message;
          }
        }
      });
    };
    
    // Start polling immediately, then every 2 seconds
    poll();
    const pollInterval = setInterval(poll, 2000);
    this.activePollIntervals.set(runId, pollInterval);
  }
  
  /**
   * Stop polling for a specific run ID
   */
  private stopPolling(runId: number): void {
    const interval = this.activePollIntervals.get(runId);
    if (interval) {
      clearInterval(interval);
      this.activePollIntervals.delete(runId);
      console.log(`Stopped polling for run ${runId}`);
    }
  }

  /**
   * Download file from URL - Force download using blob
   */
  downloadFile(downloadUrl: string, reportKey: string, format: string): void {
    console.log('📥 downloadFile called with:', { downloadUrl, reportKey, format });
    
    // Extract run ID from download URL (e.g., /api/reports/runs/123/download -> 123)
    const runIdMatch = downloadUrl.match(/\/runs\/(\d+)\//);
    if (!runIdMatch) {
      console.error('❌ Could not extract run ID from download URL:', downloadUrl);
      this.errorMessage = 'Invalid download URL format: ' + downloadUrl;
      return;
    }
    
    const runId = parseInt(runIdMatch[1], 10);
    console.log('📋 Extracted run ID:', runId);
    
    // Generate filename
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
    const reportName = reportKey.replace(/\./g, '-').replace(/[^a-zA-Z0-9-]/g, '');
    const filename = `${reportName}-${timestamp}.${format}`;
    console.log('📄 Generated filename:', filename);
    
    // Use ReportsApiService to download as blob for force download
    console.log('🔄 Calling downloadExport API for run ID:', runId);
    this.reportsApi.downloadExport(runId).pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (blob: Blob) => {
        console.log('✅ Blob received, size:', blob.size, 'bytes, type:', blob.type);
        
        if (blob.size === 0) {
          console.error('❌ Received empty blob');
          this.errorMessage = 'Downloaded file is empty';
          return;
        }
        
        // Create blob URL
        const blobUrl = window.URL.createObjectURL(blob);
        console.log('🔗 Created blob URL:', blobUrl);
        
        // Create a temporary link and click it to trigger download
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        link.style.display = 'none';
        
        // Add to DOM, click, and remove
        document.body.appendChild(link);
        console.log('🖱️ Clicking download link...');
        link.click();
        document.body.removeChild(link);
        
        // Clean up blob URL after a delay
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
          console.log('🧹 Cleaned up blob URL');
        }, 1000);
        
        console.log('✅ Download initiated for:', filename);
        this.successMessage = `Report downloaded: ${filename}`;
      },
      error: (error) => {
        console.error('❌ Download failed:', error);
        console.error('Error details:', {
          message: error.message,
          status: error.status,
          statusText: error.statusText,
          error: error.error
        });
        this.errorMessage = 'Failed to download report: ' + (error.message || error.statusText || 'Unknown error');
      }
    });
  }

  /**
   * Download the last completed report
   */
  onDownloadLastReport(): void {
    if (!this.lastCompletedDownloadUrl || !this.lastCompletedReportKey || !this.lastCompletedFormat) {
      this.errorMessage = 'No completed report available to download';
      return;
    }

    console.log('📥 Downloading last completed report...');
    this.downloadFile(
      this.lastCompletedDownloadUrl,
      this.lastCompletedReportKey,
      this.lastCompletedFormat
    );
  }

  /**
   * Handle export request from export panel
   */
  onExportRequest(exportData: { format: string, params: any }): void {
    console.log('Export request from panel:', exportData);
    
    // Use the selected reports or fall back to single report
    const reportsToExport = this.selectedReports.length > 0 ? this.selectedReports : [this.selectedReport];
    
    if (reportsToExport.length === 0) {
      console.warn('No reports selected for export');
      return;
    }

    // Map UI ids to backend keys using global maps
    const reportKeys = reportsToExport.map(id => {
      let key = this.maintenanceKeyMap[id] || this.assetKeyMap[id] || this.financialKeyMap[id] || this.inventoryKeyMap[id] || id;
      if (!key.includes('.')) {
        key = `${this.activeTab}.${key.replace(/-/g, '.')}`;
      }
      return key;
    });
    const exportParams = {
      date_from: this.reportConfig.dateRange.start,
      date_to: this.reportConfig.dateRange.end,
      format: exportData.format,
      ...exportData.params
    };

    // Create export requests for each selected report
    const exportRequests = reportKeys.map(reportKey => 
      this.exportService.exportReport(
        reportKey,
        exportData.format as any,
        exportParams
      ).pipe(
        takeUntil(this.destroy$)
      )
    );

    // Process all exports
    exportRequests.forEach((request, index) => {
      request.subscribe({
        next: (runId) => {
          console.log(`Export ${index + 1}/${reportKeys.length} started:`, reportKeys[index], 'Run ID:', runId);
        },
        error: (error) => {
          console.error(`Export ${index + 1}/${reportKeys.length} failed:`, reportKeys[index], error);
        }
      });
    });
  }

  /**
   * Get status chart data for pie chart
   */
  getStatusChartData(): { label: string; value: number; color?: string }[] {
    if (!this.assetSummaryData?.status_distribution) {
      return [];
    }

    const colorMap: { [key: string]: string } = {
      'active': '#10B981',
      'maintenance': '#F59E0B',
      'inactive': '#6B7280',
      'retired': '#EF4444'
    };

    return Object.entries(this.assetSummaryData.status_distribution).map(([status, count]) => ({
      label: status.charAt(0).toUpperCase() + status.slice(1),
      value: count as number,
      color: colorMap[status.toLowerCase()] || '#4F46E5'
    }));
  }

  /**
   * Get category chart data for bar chart
   */
  getCategoryChartData(): { label: string; value: number }[] {
    if (!this.assetSummaryData?.category_distribution) {
      return [];
    }

    return Object.entries(this.assetSummaryData.category_distribution).map(([category, count]) => ({
      label: category,
      value: count as number
    }));
  }

  /**
   * Format number for display
   */
  formatNumber(value: number): string {
    return value.toLocaleString('en-US', { maximumFractionDigits: 0 });
  }
}
