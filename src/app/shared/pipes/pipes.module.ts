import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CaseIdPipe } from './case-id/case-id.pipe';
import { TextOverflowPipe } from './text-overflow/text-overflow.pipe';
import { AnswerPercentagePipe } from './answer-percentage/answer-percentage.pipe';
import { SortPipe } from './sort/sort.pipe';
import { QuestionContributorsPipe } from './question-contributors/question-contributors.pipe';
import { RatingColorPipe } from './rating-color/rating-color.pipe';
import { ExtendedDatePipe } from './extended-date/extended-date.pipe';

@NgModule({
  declarations: [CaseIdPipe, TextOverflowPipe, RatingColorPipe, QuestionContributorsPipe, AnswerPercentagePipe, SortPipe, ExtendedDatePipe],
  imports: [CommonModule],
  exports: [CaseIdPipe, TextOverflowPipe, RatingColorPipe, QuestionContributorsPipe, AnswerPercentagePipe, SortPipe, ExtendedDatePipe],
  providers: [RatingColorPipe, QuestionContributorsPipe, DatePipe]
})
export class PipesModule {}
