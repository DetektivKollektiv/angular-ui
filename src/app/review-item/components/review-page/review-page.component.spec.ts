import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReviewPageComponent } from './review-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@shared/material/material.module';
import { LoaderModule } from '@shared/loader/loader.module';
import { HelperModule } from '@shared/helper/helper.module';
import { AuthService } from '@shared/auth/auth-service/auth.service';
import { MockAuthService } from '../../../../test/mocks/mock-auth.service';
import { UserService } from '../../../core/services/user/user.service';
import { MockUserService } from '../../../../test/mocks/mock-user.service';
import { QuestionComponent } from '../question/question.component';
import { CommonModule } from '@angular/common';
import { UnsavedChangesModule } from 'src/app/shared/unsaved-changes/unsaved-changes.module';
import { FormsModule } from '@angular/forms';
import { TagsQuestionComponent } from '../tags-question/tags-question.component';
import { ReviewsService } from '../../services/reviews/reviews.service';
import { MockReviewService } from '../../services/reviews/mock/mock-review.service';
import { FactcheckComponent } from '../factcheck/factcheck.component';
import { ReviewProcessComponent } from '../review-process/review-process.component';
import { ReviewQuestionComponent } from '../review-question/review-question.component';
import { ReviewSummaryComponent } from '../review-summary/review-summary.component';
import { CaseDetailsModule } from '@shared/case-details/case-details.module';
import { UserExperienceBubbleListModule } from '@shared/user-experience-bubble-list/user-experience-bubble-list.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { WatsonComponent } from '../watson/watson.component';
import { BreadcrumbModule } from '@shared/breadcrumb/breadcrumb.module';
import { PipesModule } from '@shared/pipes/pipes.module';

describe('ReviewPageComponent', () => {
  let component: ReviewPageComponent;
  let fixture: ComponentFixture<ReviewPageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          ReviewPageComponent,
          QuestionComponent,
          TagsQuestionComponent,
          FactcheckComponent,
          ReviewProcessComponent,
          ReviewQuestionComponent,
          ReviewSummaryComponent,
          WatsonComponent
        ],
        imports: [
          RouterTestingModule,
          MaterialModule,
          LoaderModule,
          HelperModule,
          CommonModule,
          UnsavedChangesModule,
          FormsModule,
          CaseDetailsModule,
          UserExperienceBubbleListModule,
          IvyCarouselModule,
          BreadcrumbModule,
          PipesModule
        ],
        providers: [
          { provide: AuthService, useClass: MockAuthService },
          { provide: UserService, useClass: MockUserService },
          { provide: ReviewsService, useClass: MockReviewService }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
