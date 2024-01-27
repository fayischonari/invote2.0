import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authentication/components/login/login.component';
import { LandingComponent } from './modules/dashboard/components/landing/landing.component';
import { VoterListComponent } from './modules/participants/components/voter-list/voter-list.component';
import { VoterAddComponent } from './modules/participants/components/voter-add/voter-add.component';
import { EventAreaComponent } from './modules/events/components/event-area/event-area.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'voter-list', component: VoterListComponent},
  {path: 'voter-add', component: VoterAddComponent},
  {path: 'events', component: EventAreaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
