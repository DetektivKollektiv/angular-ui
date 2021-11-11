import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseIdPipe } from './case-id.pipe';
import { TextOverflowPipe } from './text-overflow.pipe';
import { RatingColorPipe } from './rating-color.pipe';
import { RatingScorePipe } from './rating-score.pipe';
import { QuestionContributorsPipe } from './question-contributors.pipe';
import { AnswerPercentagePipe } from './answer-percentage.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [CaseIdPipe, TextOverflowPipe, RatingColorPipe, RatingScorePipe, QuestionContributorsPipe, AnswerPercentagePipe, SortPipe],
  imports: [CommonModule],
  exports: [CaseIdPipe, TextOverflowPipe, RatingColorPipe, RatingScorePipe, QuestionContributorsPipe, AnswerPercentagePipe, SortPipe],
  providers: [RatingScorePipe, RatingColorPipe, QuestionContributorsPipe]
})
export class PipesModule {}
