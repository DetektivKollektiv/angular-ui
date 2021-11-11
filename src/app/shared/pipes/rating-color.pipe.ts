import { Pipe, PipeTransform } from '@angular/core';
import { RatingService } from '../../services/rating.service';

@Pipe({
  name: 'ratingColor'
})
export class RatingColorPipe implements PipeTransform {
  constructor(private ratingService: RatingService) {}

  transform(resultScore: number): string {
    return this.ratingService.getColorForScore(resultScore);
  }
}
