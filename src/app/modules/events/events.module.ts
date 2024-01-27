import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventAreaComponent } from './components/event-area/event-area.component';
import { DashboardModule } from "../dashboard/dashboard.module";



@NgModule({
    declarations: [
        EventAreaComponent
    ],
    imports: [
        CommonModule,
        DashboardModule
    ]
})
export class EventsModule { }
