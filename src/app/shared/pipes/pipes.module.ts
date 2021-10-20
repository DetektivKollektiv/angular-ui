import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseIdPipe } from './case-id.pipe';
import { TextOverflowPipe } from './text-overflow.pipe';
import { RatingColorPipe } from './rating-color.pipe';
import { RatingScorePipe } from './rating-score.pipe';
import { QuestionContributorsPipe } from './question-contributors.pipe';
import { AnswerPercentagePipe } from './answer-percentage.pipe';

@NgModule({
  declarations: [CaseIdPipe, TextOverflowPipe, RatingColorPipe, RatingScorePipe, QuestionContributorsPipe, AnswerPercentagePipe],
  imports: [CommonModule],
  exports: [CaseIdPipe, TextOverflowPipe, RatingColorPipe, RatingScorePipe, QuestionContributorsPipe, AnswerPercentagePipe],
  providers: [RatingScorePipe, RatingColorPipe, QuestionContributorsPipe]
})
export class PipesModule {}
