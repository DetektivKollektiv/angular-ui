import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './components/review/review.component';
import { HelperModule } from '../shared/helper/helper.module';
import { QuestionComponent } from './components/question/question.component';
import { MaterialModule } from '../shared/material/material.module';
import { LoaderModule } from '../shared/loader/loader.module';
import { FormsModule } from '@angular/forms';
import { UnsavedChangesModule } from '../shared/unsaved-changes/unsaved-changes.module';
import { TagsQuestionComponent } from './components/tags-question/tags-question.component';
import { ReviewsService } from './services/reviews/reviews.service';
import { FactcheckComponent } from './components/factcheck/factcheck.component';
import { MockReviewService } from './services/reviews/mock/mock-review.service';
import { ReviewProcessComponent } from './components/review-process/review-process.component';
import { ReviewQuestionComponent } from './components/review-question/review-question.component';
import { ReviewSummaryComponent } from './components/review-summary/review-summary.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { RouterModule } from '@angular/router';
import { OpenReviewDialogComponent } from './components/open-review-dialog/open-review-dialog.component';

@NgModule({
  declarations: [
    ReviewComponent,
    QuestionComponent,
    TagsQuestionComponent,
    FactcheckComponent,
    ReviewProcessComponent,
    ReviewQuestionComponent,
    ReviewSummaryComponent,
    OpenReviewDialogComponent,
  ],
  exports: [ReviewComponent],
  imports: [
    CommonModule,
    HelperModule,
    MaterialModule,
    LoaderModule,
    UnsavedChangesModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
    ReviewsService,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class ReviewItemModule {}
