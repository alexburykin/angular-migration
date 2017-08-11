import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LandingModule } from './landing/landing.module';
import { SharedModule } from './_shared/shared.module';
import { DOMAIN } from '../config';
// tslint:disable-next-line
import 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LandingModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: 'DOMAIN',
      useValue: DOMAIN
    },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
