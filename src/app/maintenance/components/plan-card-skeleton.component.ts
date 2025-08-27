import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-card-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="rounded-xl border p-4 animate-pulse">
    <div class="h-4 bg-gray-200 rounded w-2/3 mb-3"></div>
    <div class="h-3 bg-gray-200 rounded w-1/3 mb-4"></div>
    <div class="grid grid-cols-3 gap-2">
      <div class="h-3 bg-gray-200 rounded"></div>
      <div class="h-3 bg-gray-200 rounded"></div>
      <div class="h-3 bg-gray-200 rounded"></div>
    </div>
  </div>
  `
})
export class PlanCardSkeletonComponent {}


