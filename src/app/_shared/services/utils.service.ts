/* tslint:disable no-any */
import {Injectable} from '@angular/core';

@Injectable()

export class UtilsService {
    public arrayUnique(arr: any[]): any[] {

        const a: any[] = arr.concat();
        for (let i: number = 0; i < a.length; ++i) {
            for (let j: number = i + 1; j < a.length; ++j) {
                if (a[i] === a[j]) {
                    debugger;
                    a.splice(j--, 1);
                }
            }
        }
        return a;

    }

    public getRandomInRange(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
