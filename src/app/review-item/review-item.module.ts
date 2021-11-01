import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './components/review/review.component';
import { HelperModule } from '@shared/helper/helper.module';
import { QuestionComponent } from './components/question/question.component';
import { MaterialModule } from '@shared/material/material.module';
import { LoaderModule } from '@shared/loader/loader.module';
import { FormsModule } from '@angular/forms';
import { UnsavedChangesModule } from '@shared/unsaved-changes/unsaved-changes.module';
import { TagsQuestionComponent } from './components/tags-question/tags-question.component';
import { ReviewsService } from './services/reviews/reviews.service';
import { FactcheckComponent } from './components/factcheck/factcheck.component';
import { ReviewProcessComponent } from './components/review-process/review-process.component';
import { ReviewPageComponent } from './components/review-page/review-page.component';
import { ReviewQuestionComponent } from './components/review-question/review-question.component';
import { ReviewSummaryComponent } from './components/review-summary/review-summary.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { RouterModule } from '@angular/router';
import { OpenReviewDialogComponent } from './components/open-review-dialog/open-review-dialog.component';
import { SwiperModule } from 'swiper/angular';
import { CaseDetailsModule } from '@shared/case-details/case-details.module';
import { UserExperienceBubbleListModule } from '@shared/user-experience-bubble-list/user-experience-bubble-list.module';
import { WatsonComponent } from './components/watson/watson.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { BreadcrumbModule } from '@shared/breadcrumb/breadcrumb.module';
import { PipesModule } from '@shared/pipes/pipes.module';
import { QuestionCarouselModule } from '@shared/question-carousel/question-carousel.module';
import { EdgyBackgroundModule } from '@shared/edgy-background/edgy-background.module';
import { CaseFactsModule } from '@shared/case-facts/case-facts.module';
import { ButtonModule } from '@shared/button/button.module';
import { CommentInputModule } from '@shared/comment-input/comment-input.module';
import { CaseListItemModule } from '@shared/case-list-item/case-list-item.module';
import { ReviewSuccessPageComponent } from './components/review-success-page/review-success-page.component';
import { OpenCaseListSliderModule } from '@shared/open-case-list-slider/open-case-list-slider.module';
import { ShareModule } from '@shared/share/share.module';
import { IconWithContentModule } from '@shared/icon-with-content/icon-with-content.module';
import { SolvedCasesModule } from '@shared/solved-cases/solved-cases.module';

@NgModule({
  declarations: [
    ReviewComponent,
    QuestionComponent,
    TagsQuestionComponent,
    FactcheckComponent,
    ReviewProcessComponent,
    ReviewQuestionComponent,
    ReviewSummaryComponent,
    ReviewSuccessPageComponent,
    OpenReviewDialogComponent,
    ReviewPageComponent,
    WatsonComponent
  ],
  exports: [ReviewComponent, QuestionComponent],
  imports: [
    CommonModule,
    HelperModule,
    MaterialModule,
    LoaderModule,
    UnsavedChangesModule,
    FormsModule,
    RouterModule,
    SwiperModule,
    UserExperienceBubbleListModule,
    IvyCarouselModule,
    CaseDetailsModule,
    BreadcrumbModule,
    PipesModule,
    QuestionCarouselModule,
    EdgyBackgroundModule,
    CaseFactsModule,
    ButtonModule,
    CommentInputModule,
    CaseListItemModule,
    OpenCaseListSliderModule,
    ShareModule,
    IconWithContentModule,
    SolvedCasesModule
  ],
  providers: [
    ReviewsService,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class ReviewItemModule {}
