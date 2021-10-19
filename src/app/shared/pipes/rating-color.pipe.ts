import { Pipe, PipeTransform } from '@angular/core';
import { RatingColorService } from '../../services/rating-color-service/rating-color.service';
import { RatingScorePipe } from './rating-score.pipe';

@Pipe({
  name: 'ratingColor'
})
export class RatingColorPipe implements PipeTransform {
  constructor(private ratingColorService: RatingColorService, private ratingScorePipe: RatingScorePipe) {}

  transform(score: number): string {
    return this.ratingColorService.getColorForScore(this.ratingScorePipe.transform(score));
  }
}
