import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LandingModule } from './landing/landing.module';
import { SharedModule } from './_shared/shared.module';
import { DOMAIN } from '../config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
