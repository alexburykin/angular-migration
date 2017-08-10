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
  ],
  exports: [
    ModalComponent,
    LoaderComponent,
    InfiniteScrollDirective
  ],
  providers: [
    ApiService,
    UtilsService,
    ModalService,
    SharedService,
    BaseRequestOptions
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
