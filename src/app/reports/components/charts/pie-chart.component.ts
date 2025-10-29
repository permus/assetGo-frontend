import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  template: `
    <div class="chart-container" [style.height.px]="height">
      <canvas
        baseChart
        [data]="chartData"
        [type]="chartType"
        [options]="chartOptions">
      </canvas>
    </div>
  `,
  styles: [`
    .chart-container {
      position: relative;
      width: 100%;
      max-height: 350px;
      min-height: 250px;
    }
    canvas {
      max-height: 100% !important;
    }
  `]
})
export class PieChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  
  @Input() data: { label: string; value: number; color?: string }[] = [];
  @Input() title: string = '';
  @Input() height: number = 300;
  @Input() showLegend: boolean = true;
  
  chartType: ChartType = 'pie';
  chartData!: ChartData<'pie'>;
  chartOptions: ChartConfiguration['options'] = {};
  
  ngOnInit(): void {
    this.initializeChart();
  }
  
  private initializeChart(): void {
    const defaultColors = [
      '#4F46E5', // Indigo
      '#10B981', // Green
      '#F59E0B', // Amber
      '#EF4444', // Red
      '#8B5CF6', // Purple
      '#06B6D4', // Cyan
      '#F97316', // Orange
      '#EC4899', // Pink
    ];
    
    this.chartData = {
      labels: this.data.map(d => d.label),
      datasets: [{
        data: this.data.map(d => d.value),
        backgroundColor: this.data.map((d, i) => d.color || defaultColors[i % defaultColors.length]),
        borderWidth: 2,
        borderColor: '#FFFFFF'
      }]
    };
    
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1.5,
      plugins: {
        legend: {
          display: this.showLegend,
          position: 'bottom',
          labels: {
            padding: 10,
            font: {
              size: 11
            }
          }
        },
        title: {
          display: !!this.title,
          text: this.title,
          font: {
            size: 16,
            weight: 'bold'
          },
          padding: {
            top: 10,
            bottom: 20
          }
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const label = context.label || '';
              const value = context.parsed || 0;
              const total = (context.dataset.data as number[]).reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      }
    };
  }
  
  updateChart(): void {
    this.initializeChart();
    this.chart?.update();
  }
}


