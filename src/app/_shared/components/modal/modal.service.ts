/* tslint:disable no-any */

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ModalService {

    private _modalSequence$$: Subject<any> = new Subject();
    private _modalResultSequence$$: Subject<any> = new Subject();

    public open(componentObj: { component: any, context?: any }): void {
        this._modalSequence$$.next(componentObj);
    }

    public close( result?: any ): void {
        this._modalSequence$$.next(null);
        this._modalResultSequence$$.next( result );
    }

    public get modalSequence$(): Observable<any> {
        return this._modalSequence$$.asObservable();
    }

    public get modalResultSequence$(): Observable<any> {
        return this._modalResultSequence$$.asObservable();
    }

}
