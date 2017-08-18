import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedService {

  public landingData: any;

  constructor(
    private _api: ApiService,
  ) {}

  public getCountries(): Observable<any> {
    return this._api.get('/api/v1/accounts/get-country/');
  }

  public getLandingPage() {
    if (this.landingData) {
      return Observable.of(this.landingData);
    }
    return this._api.get(`/api/v1/core/get-landings-data/`)
      .map((res: any) => {
        this.landingData = res;
        return res;
      })
      .catch((err: Error) => Observable.of(err.message ||
        'LandingResolver: getLandingData -> server error'));
  }

}
