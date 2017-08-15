import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass'],
  encapsulation: ViewEncapsulation.None

})
export class CoursesComponent implements OnInit {

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
    const ele = <HTMLElement>document.querySelector('.courses-slider .slick-next');
    ele.click();
  }

  slickPrev() {
    const ele = <HTMLElement>document.querySelector('.courses-slider .slick-prev');
    ele.click();
  }



}
