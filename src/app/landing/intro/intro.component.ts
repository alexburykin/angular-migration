import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../_shared/services/shared.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.sass']
})
export class IntroComponent implements OnInit {

  public page: any;

  constructor(
    private _sharedService: SharedService
  ) { }

  ngOnInit() {
    this._sharedService.getLandingPage().subscribe( page => { this.page  = page; });
  }

}
