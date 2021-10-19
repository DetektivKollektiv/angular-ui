import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingScore'
})
export class RatingScorePipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(value * 25);
  }
}
