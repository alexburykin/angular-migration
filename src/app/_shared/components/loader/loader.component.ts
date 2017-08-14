import { Component, OnInit } from '@angular/core';
import { animateFactory } from 'ng2-animate';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
  animations: [animateFactory(500, 0, 'ease-in')]

})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
