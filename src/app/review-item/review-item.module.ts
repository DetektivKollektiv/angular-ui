import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from '@shared/breadcrumb/breadcrumb.module';
import { ButtonModule } from '@shared/button/button.module';
import { CaseDetailsModule } from '@shared/case-details/case-details.module';
import { CaseFactsModule } from '@shared/case-facts/case-facts.module';
import { CaseListItemModule } from '@shared/case-list-item/case-list-item.module';
import { CommentInputModule } from '@shared/comment-input/comment-input.module';
import { EdgyBackgroundModule } from '@shared/edgy-background/edgy-background.module';
import { HelperModule } from '@shared/helper/helper.module';
import { IconWithContentModule } from '@shared/icon-with-content/icon-with-content.module';
import { LoaderModule } from '@shared/loader/loader.module';
import { MaterialModule } from '@shared/material/material.module';
import { OpenCaseListSliderModule } from '@shared/open-case-list-slider/open-case-list-slider.module';
import { PipesModule } from '@shared/pipes/pipes.module';
import { QuestionCarouselModule } from '@shared/question-carousel/question-carousel.module';
import { ShareModule } from '@shared/share/share.module';
import { SolvedCasesModule } from '@shared/solved-cases/solved-cases.module';
import { UnsavedChangesModule } from '@shared/unsaved-changes/unsaved-changes.module';
import { UserExperienceBubbleListModule } from '@shared/user-experience-bubble-list/user-experience-bubble-list.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SwiperModule } from 'swiper/angular';
import { ReviewPageComponent } from './components/review-page/review-page.component';
import { ReviewQuestionContentComponent } from './components/review-question-content/review-question-content.component';
import { TrafficLightFieldComponent } from './components/review-question-content/traffic-light-field/traffic-light-field.component';
import { ReviewQuestionSidebarComponent } from './components/review-question-sidebar/review-question-sidebar.component';
import { ReviewSuccessPageComponent } from './components/review-success-page/review-success-page.component';
import { ReviewsService } from './services/reviews/reviews.service';

@NgModule({
  declarations: [
    ReviewSuccessPageComponent,
    ReviewPageComponent,
    ReviewQuestionContentComponent,
    ReviewQuestionSidebarComponent,
    TrafficLightFieldComponent
  ],
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
    SolvedCasesModule,
    ReactiveFormsModule
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
