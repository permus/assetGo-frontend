import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-line-chart',
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
    }
  `]
})
export class LineChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  
  @Input() datasets: { label: string; data: number[]; color?: string }[] = [];
  @Input() labels: string[] = [];
  @Input() title: string = '';
  @Input() height: number = 300;
  @Input() showLegend: boolean = true;
  @Input() fill: boolean = false;
  
  chartType: ChartType = 'line';
  chartData!: ChartData<'line'>;
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
    ];
    
    this.chartData = {
      labels: this.labels,
      datasets: this.datasets.map((dataset, index) => ({
        label: dataset.label,
        data: dataset.data,
        borderColor: dataset.color || defaultColors[index % defaultColors.length],
        backgroundColor: this.fill 
          ? `${dataset.color || defaultColors[index % defaultColors.length]}33`
          : 'transparent',
        borderWidth: 2,
        fill: this.fill,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 5,
        pointBackgroundColor: dataset.color || defaultColors[index % defaultColors.length],
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2
      }))
    };
    
    this.chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          display: this.showLegend,
          position: 'top',
          labels: {
            padding: 15,
            font: {
              size: 12
            },
            usePointStyle: true
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
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          cornerRadius: 6,
          titleFont: {
            size: 13
          },
          bodyFont: {
            size: 12
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          ticks: {
            font: {
              size: 11
            }
          }
        },
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            font: {
              size: 11
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


