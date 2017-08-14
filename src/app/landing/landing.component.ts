import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { animateFactory } from 'ng2-animate';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass'],
  animations: [animateFactory(500, 0, 'ease-in')],
})
export class LandingComponent implements OnInit {

  public page: any;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.data.subscribe( data => this.page  = data.page );
  }

  onSearch(keyword: string) {
    // TODO: update url!
    location.href = `https://dev.investmentpunk.academy/db/search/?keyword=${keyword}`;
  }

}
