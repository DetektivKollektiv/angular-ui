import { Pipe, PipeTransform } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';

@Pipe({
  name: 'ratingScore'
})
export class RatingScorePipe implements PipeTransform {
  constructor(private ratingService: RatingService) {}

  transform(resultScore: number): number {
    return this.ratingService.convertResultScoreToScore(resultScore);
  }
}
