import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedService {

  constructor(
    private _api: ApiService,
  ) {}

  public getCountries(): Observable<any> {
    return this._api.get('/api/v1/accounts/get-country/');
  }

}
