import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-common-text',
  templateUrl: './common-text.component.html',
  styleUrls: ['./common-text.component.sass']
})
export class CommonTextComponent implements OnInit {

  public page: any;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.data.subscribe( data => { this.page = data.page; });
  }

}
