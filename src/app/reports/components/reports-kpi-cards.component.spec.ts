import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportsKpiCardsComponent } from './reports-kpi-cards.component';
import { KPICard, ReportCategory } from '../models/reports.models';

describe('ReportsKpiCardsComponent', () => {
  let component: ReportsKpiCardsComponent;
  let fixture: ComponentFixture<ReportsKpiCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsKpiCardsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsKpiCardsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty KPIs array', () => {
    expect(component.kpis).toEqual([]);
    expect(component.category).toBe('assets');
  });

  it('should not display KPI cards when no KPIs', () => {
    component.kpis = [];
    fixture.detectChanges();
    
    const kpiCards = fixture.debugElement.nativeElement.querySelector('.kpi-cards');
    expect(kpiCards).toBeFalsy();
  });

  it('should display KPI cards when KPIs are provided', () => {
    component.kpis = [
      {
        key: 'total_count',
        label: 'Total Count',
        value: 100,
        format: 'number',
        icon: 'package',
        color: 'blue'
      }
    ];
    fixture.detectChanges();
    
    const kpiCards = fixture.debugElement.nativeElement.querySelector('.kpi-cards');
    expect(kpiCards).toBeTruthy();
    
    const kpiCard = fixture.debugElement.nativeElement.querySelector('.kpi-card');
    expect(kpiCard).toBeTruthy();
  });

  it('should format currency values correctly', () => {
    const result = component.formatValue(1000, 'currency');
    expect(result).toContain('1,000');
    expect(result).toContain('AED');
  });

  it('should format percentage values correctly', () => {
    const result = component.formatValue(75.5, 'percentage');
    expect(result).toBe('75.5%');
  });

  it('should format number values correctly', () => {
    const result = component.formatValue(1000, 'number');
    expect(result).toBe('1,000');
  });

  it('should return string values as-is', () => {
    const result = component.formatValue('Test Value', 'text');
    expect(result).toBe('Test Value');
  });

  it('should display KPI card with correct structure', () => {
    component.kpis = [
      {
        key: 'total_count',
        label: 'Total Count',
        value: 100,
        format: 'number',
        icon: 'package',
        color: 'blue'
      }
    ];
    fixture.detectChanges();
    
    const kpiCard = fixture.debugElement.nativeElement.querySelector('.kpi-card');
    expect(kpiCard).toBeTruthy();
    
    const header = kpiCard.querySelector('.kpi-card__header');
    expect(header).toBeTruthy();
    
    const content = kpiCard.querySelector('.kpi-card__content');
    expect(content).toBeTruthy();
    
    const value = kpiCard.querySelector('.kpi-card__value');
    expect(value.textContent).toContain('100');
    
    const label = kpiCard.querySelector('.kpi-card__label');
    expect(label.textContent).toContain('Total Count');
  });

  it('should display trend information when provided', () => {
    component.kpis = [
      {
        key: 'total_count',
        label: 'Total Count',
        value: 100,
        format: 'number',
        icon: 'package',
        color: 'blue',
        trend: {
          value: 10,
          direction: 'up',
          period: 'vs last month'
        }
      }
    ];
    fixture.detectChanges();
    
    const trend = fixture.debugElement.nativeElement.querySelector('.kpi-card__trend');
    expect(trend).toBeTruthy();
    
    const trendValue = trend.querySelector('.trend-value');
    expect(trendValue.textContent).toContain('10%');
    
    const trendIcon = trend.querySelector('.trend-icon');
    expect(trendIcon.classList.contains('trend-up')).toBe(true);
  });

  it('should apply correct color classes', () => {
    component.kpis = [
      {
        key: 'total_count',
        label: 'Total Count',
        value: 100,
        format: 'number',
        icon: 'package',
        color: 'green'
      }
    ];
    fixture.detectChanges();
    
    const kpiCard = fixture.debugElement.nativeElement.querySelector('.kpi-card');
    expect(kpiCard.classList.contains('kpi-card--green')).toBe(true);
  });

  it('should display different icons based on icon property', () => {
    component.kpis = [
      {
        key: 'total_count',
        label: 'Total Count',
        value: 100,
        format: 'number',
        icon: 'package',
        color: 'blue'
      }
    ];
    fixture.detectChanges();
    
    const icon = fixture.debugElement.nativeElement.querySelector('.kpi-card__icon svg');
    expect(icon).toBeTruthy();
  });

  it('should track by key in ngFor', () => {
    const kpi1 = { key: 'kpi1', label: 'KPI 1', value: 100, format: 'number' as const };
    const kpi2 = { key: 'kpi2', label: 'KPI 2', value: 200, format: 'number' as const };
    
    expect(component.trackByKey(0, kpi1)).toBe('kpi1');
    expect(component.trackByKey(1, kpi2)).toBe('kpi2');
  });

  it('should handle multiple KPI cards', () => {
    component.kpis = [
      {
        key: 'total_count',
        label: 'Total Count',
        value: 100,
        format: 'number',
        icon: 'package',
        color: 'blue'
      },
      {
        key: 'total_value',
        label: 'Total Value',
        value: 50000,
        format: 'currency',
        icon: 'dollar-sign',
        color: 'green'
      }
    ];
    fixture.detectChanges();
    
    const kpiCards = fixture.debugElement.nativeElement.querySelectorAll('.kpi-card');
    expect(kpiCards.length).toBe(2);
  });

  it('should display period information when trend is provided', () => {
    component.kpis = [
      {
        key: 'total_count',
        label: 'Total Count',
        value: 100,
        format: 'number',
        icon: 'package',
        color: 'blue',
        trend: {
          value: 10,
          direction: 'up',
          period: 'vs last month'
        }
      }
    ];
    fixture.detectChanges();
    
    const period = fixture.debugElement.nativeElement.querySelector('.kpi-card__period');
    expect(period.textContent).toContain('vs last month');
  });

  it('should handle different trend directions', () => {
    const upTrend = {
      key: 'up_trend',
      label: 'Up Trend',
      value: 100,
      format: 'number' as const,
      icon: 'trending-up',
      color: 'green',
      trend: { value: 10, direction: 'up' as const, period: 'vs last month' }
    };
    
    const downTrend = {
      key: 'down_trend',
      label: 'Down Trend',
      value: 100,
      format: 'number' as const,
      icon: 'trending-down',
      color: 'red',
      trend: { value: 5, direction: 'down' as const, period: 'vs last month' }
    };
    
    component.kpis = [upTrend, downTrend];
    fixture.detectChanges();
    
    const trendIcons = fixture.debugElement.nativeElement.querySelectorAll('.trend-icon');
    expect(trendIcons[0].classList.contains('trend-up')).toBe(true);
    expect(trendIcons[1].classList.contains('trend-down')).toBe(true);
  });
});
