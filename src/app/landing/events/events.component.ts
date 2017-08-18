import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../_shared/services/shared.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})
export class EventsComponent implements OnInit {

  public page: any;

  constructor(
    private _sharedService: SharedService
  ) { }

  ngOnInit() {
    this._sharedService.getLandingPage().subscribe( page => { this.page  = page; });
  }

}
