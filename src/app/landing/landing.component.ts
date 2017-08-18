import { Component, OnInit } from '@angular/core';
import { SharedService } from '../_shared/services/shared.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass'],
})
export class LandingComponent implements OnInit {

  public page: any;

  constructor(
    private _sharedService: SharedService
  ) { }

  ngOnInit() {
    this._sharedService.getLandingPage().subscribe( page => { this.page  = page; });
  }

  onSearch(keyword: string) {
    // TODO: update url!
    location.href = `https://dev.investmentpunk.academy/db/search/?keyword=${keyword}`;
  }

}
