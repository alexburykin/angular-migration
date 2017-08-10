import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { EventsComponent } from './events/events.component';

const landingRoutes: Route[] = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        component: EventsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(landingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LandingRoutingModule { }
