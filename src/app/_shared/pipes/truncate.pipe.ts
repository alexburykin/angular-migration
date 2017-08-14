// truncate.ts
import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: any, trail: string): string {
    limit = limit ? parseInt(limit, 0) : 10;
    trail = !trail ? '...' : trail;
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
