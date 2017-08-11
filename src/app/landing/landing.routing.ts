import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { IntroComponent } from './intro/intro.component';
import { EventsComponent } from './events/events.component';
import { LandingResolver } from '../_shared/services/landing-resolver.service';

const landingRoutes: Route[] = [
  {
    path: '',
    component: LandingComponent,
    resolve: { page: LandingResolver },
    children: [
      {
        path: '',
        component: IntroComponent,
        resolve: { page: LandingResolver },
      },
      {
        path: 'events',
        component: EventsComponent,
        resolve: { page: LandingResolver },
      }
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
