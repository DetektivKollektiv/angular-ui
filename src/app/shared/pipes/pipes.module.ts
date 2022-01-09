import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseIdPipe } from './case-id/case-id.pipe';
import { TextOverflowPipe } from './text-overflow/text-overflow.pipe';
import { AnswerPercentagePipe } from './answer-percentage/answer-percentage.pipe';
import { SortPipe } from './sort/sort.pipe';
import { QuestionContributorsPipe } from './question-contributors/question-contributors.pipe';
import { RatingColorPipe } from './rating-color/rating-color.pipe';

@NgModule({
  declarations: [CaseIdPipe, TextOverflowPipe, RatingColorPipe, QuestionContributorsPipe, AnswerPercentagePipe, SortPipe],
  imports: [CommonModule],
  exports: [CaseIdPipe, TextOverflowPipe, RatingColorPipe, QuestionContributorsPipe, AnswerPercentagePipe, SortPipe],
  providers: [RatingColorPipe, QuestionContributorsPipe]
})
export class PipesModule {}
