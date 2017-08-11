import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
import { ApiService } from './services/api.service';
import { UtilsService } from './services/utils.service';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './components/modal/modal.service';
import { SharedService } from './services/shared.service';
import { BaseRequestOptions, HttpModule, } from '@angular/http';
import { TruncatePipe } from './pipes/truncate.pipe';
import { LandingResolver } from './services/landing-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    ModalComponent,
    LoaderComponent,
    InfiniteScrollDirective,
    TruncatePipe,
  ],
  exports: [
    ModalComponent,
    LoaderComponent,
    InfiniteScrollDirective,
    TruncatePipe
  ],
  providers: [
    ApiService,
    UtilsService,
    ModalService,
    SharedService,
    BaseRequestOptions,
    LandingResolver
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
