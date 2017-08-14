import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet><app-modal></app-modal>',
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
  ) {
    const event = document.createEvent('Event');
    event.initEvent('appready', true, true);
    document.dispatchEvent(event);
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
