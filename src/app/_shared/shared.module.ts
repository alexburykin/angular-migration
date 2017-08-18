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
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ModalInfoComponent } from './components/modals/modal-info/modal-info.component';

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
    SafeHtmlPipe,
    ModalInfoComponent
  ],
  exports: [
    ModalComponent,
    LoaderComponent,
    InfiniteScrollDirective,
    TruncatePipe,
    SafeHtmlPipe
  ],
  providers: [
    ApiService,
    UtilsService,
    ModalService,
    SharedService,
    BaseRequestOptions,
  ],
  entryComponents: [
    ModalInfoComponent
  ]
})
export class SharedModule { }
