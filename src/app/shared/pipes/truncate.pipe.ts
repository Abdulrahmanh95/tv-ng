import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number, trail: string = '...'): string {
    limit = limit ? (+limit) : 20;
    trail = (trail && trail.length) > 1 ? trail : '...';
    if (value && value.length > limit) {
      let trimmedString = value.substring(0, limit);
      trimmedString = trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')));
      return trimmedString + trail;
    } else {
      return value;
    }
  }
}
