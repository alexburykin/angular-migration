import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing.routing';
import { EventsComponent } from './events/events.component';
import { SharedModule } from '../_shared/shared.module';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { InlineSVGModule } from 'ng-inline-svg';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    Ng2PageScrollModule,
    InlineSVGModule
  ],
  declarations: [
    LandingComponent,
    EventsComponent
  ]
})
export class LandingModule { }
