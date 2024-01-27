import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/authentication/components/login/login.component';
import { DashboardComponent } from './modules/authentication/components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './modules/dashboard/components/landing/landing.component';
import { HeaderComponent } from './modules/dashboard/components/header/header.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { VoterAddComponent } from './modules/participants/components/voter-add/voter-add.component';
import { ParticipantsModule } from './modules/participants/participants.module';
import { ConfirmBoxComponent } from './components/confirm-box/confirm-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ToastrModule } from 'ngx-toastr';
import { EventsModule } from './modules/events/events.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ConfirmBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    ParticipantsModule,
    EventsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
