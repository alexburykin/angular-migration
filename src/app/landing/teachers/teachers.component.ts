import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class TeachersComponent implements OnInit {

  @Input() public page;

  public slideConfig: any = {
    'slidesToShow': 3,
    'slidesToScroll': 1,
    'arrows': true,
    'dots': false
  };
  constructor() { }

  ngOnInit() {
  }

  slickNext() {
    const ele = <HTMLElement>document.querySelector('.home-slider .slick-next');
    ele.click();
  }

  slickPrev() {
    const ele = <HTMLElement>document.querySelector('.home-slider .slick-prev');
    ele.click();
  }

}
