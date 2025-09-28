import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportsHeaderComponent } from './reports-header.component';
import { ReportCategory } from '../models/reports.models';

describe('ReportsHeaderComponent', () => {
  let component: ReportsHeaderComponent;
  let fixture: ComponentFixture<ReportsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.activeTab).toBe('assets');
    expect(component.isLoading).toBe(false);
    expect(component.hasData).toBe(false);
  });

  it('should emit refresh event when refresh button is clicked', () => {
    spyOn(component.refresh, 'emit');
    
    const refreshButton = fixture.debugElement.nativeElement.querySelector('.refresh-button');
    refreshButton.click();
    
    expect(component.refresh.emit).toHaveBeenCalled();
  });

  it('should emit export event when export button is clicked', () => {
    spyOn(component.export, 'emit');
    
    const exportButton = fixture.debugElement.nativeElement.querySelector('.export-button');
    exportButton.click();
    
    expect(component.export.emit).toHaveBeenCalled();
  });

  it('should disable refresh button when loading', () => {
    component.isLoading = true;
    fixture.detectChanges();
    
    const refreshButton = fixture.debugElement.nativeElement.querySelector('.refresh-button');
    expect(refreshButton.disabled).toBe(true);
  });

  it('should disable export button when no data', () => {
    component.hasData = false;
    fixture.detectChanges();
    
    const exportButton = fixture.debugElement.nativeElement.querySelector('.export-button');
    expect(exportButton.disabled).toBe(true);
  });

  it('should enable export button when data is available', () => {
    component.hasData = true;
    fixture.detectChanges();
    
    const exportButton = fixture.debugElement.nativeElement.querySelector('.export-button');
    expect(exportButton.disabled).toBe(false);
  });

  it('should show loading status when loading', () => {
    component.isLoading = true;
    fixture.detectChanges();
    
    const statusBar = fixture.debugElement.nativeElement.querySelector('.status-bar');
    expect(statusBar).toBeTruthy();
    
    const loadingStatus = fixture.debugElement.nativeElement.querySelector('.status-item');
    expect(loadingStatus.textContent).toContain('Loading reports...');
  });

  it('should show success status when data is loaded', () => {
    component.isLoading = false;
    component.hasData = true;
    fixture.detectChanges();
    
    const statusBar = fixture.debugElement.nativeElement.querySelector('.status-bar');
    expect(statusBar).toBeTruthy();
    
    const successStatus = fixture.debugElement.nativeElement.querySelector('.status-item');
    expect(successStatus.textContent).toContain('Reports loaded successfully');
  });

  it('should not show status bar when no data and not loading', () => {
    component.isLoading = false;
    component.hasData = false;
    fixture.detectChanges();
    
    const statusBar = fixture.debugElement.nativeElement.querySelector('.status-bar');
    expect(statusBar).toBeFalsy();
  });

  it('should display correct title and subtitle', () => {
    fixture.detectChanges();
    
    const title = fixture.debugElement.nativeElement.querySelector('.title');
    const subtitle = fixture.debugElement.nativeElement.querySelector('.subtitle');
    
    expect(title.textContent).toContain('Reports');
    expect(subtitle.textContent).toContain('Generate and export comprehensive reports');
  });

  it('should have spinning icon when loading', () => {
    component.isLoading = true;
    fixture.detectChanges();
    
    const refreshButton = fixture.debugElement.nativeElement.querySelector('.refresh-button');
    const icon = refreshButton.querySelector('.button-icon');
    
    expect(icon.classList.contains('spinning')).toBe(true);
  });

  it('should not have spinning icon when not loading', () => {
    component.isLoading = false;
    fixture.detectChanges();
    
    const refreshButton = fixture.debugElement.nativeElement.querySelector('.refresh-button');
    const icon = refreshButton.querySelector('.button-icon');
    
    expect(icon.classList.contains('spinning')).toBe(false);
  });
});
