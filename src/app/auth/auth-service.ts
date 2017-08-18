import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public user: any;

  constructor() {
  }

  public setUser() {
    this.user = true;
  }

  public getUser() {
    return this.user;
  }

}
