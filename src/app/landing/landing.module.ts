import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing.routing';
import { EventsComponent } from './events/events.component';
import { SharedModule } from '../_shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule
  ],
  declarations: [
    LandingComponent,
    EventsComponent
  ]
})
export class LandingModule { }
