import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
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
export class BarChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  
  @Input() data: { label: string; value: number }[] = [];
  @Input() title: string = '';
  @Input() height: number = 300;
  @Input() horizontal: boolean = false;
  @Input() showLegend: boolean = false;
  @Input() color: string = '#4F46E5';
  
  chartType: ChartType = 'bar';
  chartData!: ChartData<'bar'>;
  chartOptions: ChartConfiguration['options'] = {};
  
  ngOnInit(): void {
    this.chartType = this.horizontal ? 'bar' : 'bar';
    this.initializeChart();
  }
  
  private initializeChart(): void {
    this.chartData = {
      labels: this.data.map(d => d.label),
      datasets: [{
        label: this.title,
        data: this.data.map(d => d.value),
        backgroundColor: this.color,
        borderColor: this.color,
        borderWidth: 0,
        borderRadius: 4
      }]
    };
    
    this.chartOptions = {
      indexAxis: this.horizontal ? 'y' : 'x',
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1.8,
      plugins: {
        legend: {
          display: this.showLegend,
          position: 'top'
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
          cornerRadius: 6
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


