import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing.routing';
import { EventsComponent } from './events/events.component';
import { SharedModule } from '../_shared/shared.module';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { InlineSVGModule } from 'ng-inline-svg';
import { IntroComponent } from './intro/intro.component';
import { TeachersComponent } from './teachers/teachers.component';
import { CoursesComponent } from './courses/courses.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { CommonTextComponent } from './footer/common-text/common-text.component';
import { CommonTextResolver } from './footer/common-text/common-text-resolver.service';
import { PricesComponent } from './footer/prices/prices.component';
import { PricesResolver } from './footer/prices/prices-resolver.service';
import { SlickModule } from 'ngx-slick';

@NgModule({
  declarations: [
    LandingComponent,
    EventsComponent,
    IntroComponent,
    TeachersComponent,
    CoursesComponent,
    EventListComponent,
    CommonTextComponent,
    PricesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    Ng2PageScrollModule,
    InlineSVGModule,
    LandingRoutingModule,
    SlickModule
  ],
  providers: [
    CommonTextResolver,
    PricesResolver
  ]
})
export class LandingModule { }
