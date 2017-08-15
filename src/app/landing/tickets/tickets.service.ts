import { Injectable } from '@angular/core';
import { ApiService } from '../../_shared/services/api.service';

@Injectable()
export class TicketsService {

  constructor(
    private _api: ApiService
  ) {}

  public get(code: string) {
    return this._api.get(`/api/v1/core/landing/retrieve-tickets/${code}/`);
  }

  public getLink(email: string) {
    return this._api.post(`/api/v1/core/landing/retrieve-tickets-link/`, {email});
  }
}
