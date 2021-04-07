import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReviewComponent } from './review.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../shared/material/material.module';
import { LoaderModule } from '../../../shared/loader/loader.module';
import { HelperModule } from '../../../shared/helper/helper.module';
import { AuthService } from '../../../shared/auth/auth-service/auth.service';
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

describe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          ReviewComponent,
          QuestionComponent,
          TagsQuestionComponent,
          FactcheckComponent,
          ReviewProcessComponent,
          ReviewQuestionComponent,
          ReviewSummaryComponent,
        ],
        imports: [
          RouterTestingModule,
          MaterialModule,
          LoaderModule,
          HelperModule,
          CommonModule,
          UnsavedChangesModule,
          FormsModule,
        ],
        providers: [
          { provide: AuthService, useClass: MockAuthService },
          { provide: UserService, useClass: MockUserService },
          { provide: ReviewsService, useClass: MockReviewService },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
