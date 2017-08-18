import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth/auth-service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet><app-modal></app-modal>',
})

export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private _authService: AuthService
  ) {
    const event = document.createEvent('Event');
    event.initEvent('appready', true, true);
    document.dispatchEvent(event);
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) { return; }
      window.scrollTo(0, 0);
    });

    this._authService.setUser();
  }
}

