import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.sass']
})
export class PricesComponent implements OnInit {

  public memberships: any;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.data.subscribe( data => { this.memberships = data.memberships; });
  }

}
