import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamListComponent } from './team-list/team-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    TeamsRoutingModule,
    TeamListComponent
  ]
})
export class TeamsModule { }
