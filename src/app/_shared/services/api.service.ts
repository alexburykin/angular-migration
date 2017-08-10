/* tslint:disable no-any */

import { Inject, Injectable } from '@angular/core';
import { BaseRequestOptions, Headers, Http, Request, Response, XHRBackend } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class ApiService extends Http {

  public token: string;

  public constructor(
    @Inject('DOMAIN') private _domain: string,
    private http: Http,
    _backend: XHRBackend,
    _defaultOptions: BaseRequestOptions
  ) {
    super(_backend, _defaultOptions);
    this.setToken();
  }

  public get(url: string): any {
    const headers: Headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(`${ this._domain }${url}`, {headers})
      .map((res: Response) => res.json())
      .catch((err: Error) => ApiService.handleError(err, 'GET'));
  }

  public post(url: string, data: any): any {
    const headers: Headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(`${ this._domain }${url}`, data, {headers})
      .map((res: Response) => res.json())
      .catch((err: Error) => ApiService.handleError(err, 'POST'));
  }

  // noinspection All for override default http `delete`
  public delete(url: string, body?: any): any {
    const headers: Headers = new Headers();
    this.createAuthorizationHeader(headers);
    url = `${ this._domain }${url}`;
    return this.request(new Request(this._defaultOptions.merge({url, body, headers, method: 'DELETE'})))
      .map((res: Response) => res.json())
      .catch((err: Error) => ApiService.handleError(err, 'DELETE'));
  }

  public put(url: string, data: any): any {
    const headers: Headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(`${ this._domain }${url}`, data, {headers})
      .map((res: Response) => res.json())
      .catch((err: Error) => ApiService.handleError(err, 'PUT'));
  }

  public setToken(): void {
    const currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  /**
   * Method for handle global http errors (snackbar of toster notifications)
   */
  private static handleError(err: any, action: string): Observable<Error> {
    // TODO add global error handler here
    let message: string = 'Server Error';
    if (err && err._body) {
      const body: any = JSON.parse(err._body);
      if (body.error) {
        message = body.error;
      } else {
        message = JSON.parse(err._body).errors[0];
      }
    }
    return Observable.throw(err);
  }

  private createAuthorizationHeader(headers: Headers): void {
    headers.append('Authorization', `JWT ${this.token}`);
  }
}
