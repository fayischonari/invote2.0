import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoterAddComponent } from './components/voter-add/voter-add.component';
import { VoterListComponent } from './components/voter-list/voter-list.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VoterAddComponent,
    VoterListComponent
  ],
  imports: [
    CommonModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParticipantsModule { }
