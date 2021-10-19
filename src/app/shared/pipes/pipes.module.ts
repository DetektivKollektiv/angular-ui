import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseIdPipe } from './case-id.pipe';
import { TextOverflowPipe } from './text-overflow.pipe';
import { RatingColorPipe } from './rating-color.pipe';
import { RatingScorePipe } from './rating-score.pipe';

@NgModule({
  declarations: [CaseIdPipe, TextOverflowPipe, RatingColorPipe, RatingScorePipe],
  imports: [CommonModule],
  exports: [CaseIdPipe, TextOverflowPipe, RatingColorPipe, RatingScorePipe],
  providers: [RatingScorePipe]
})
export class PipesModule {}
