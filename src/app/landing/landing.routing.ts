import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route, RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { IntroComponent } from './intro/intro.component';

const landingRoutes: Route[] = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        component: IntroComponent,
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
