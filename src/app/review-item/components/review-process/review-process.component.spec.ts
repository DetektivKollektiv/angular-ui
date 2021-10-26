import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '@shared/pipes/pipes.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { Review } from '../../model/review';
import { MockReviewService } from '../../services/reviews/mock/mock-review.service';
import { ReviewsService } from '../../services/reviews/reviews.service';
import { QuestionComponent } from '../question/question.component';
import { ReviewQuestionComponent } from '../review-question/review-question.component';
import { ReviewSummaryComponent } from '../review-summary/review-summary.component';
import { TagsQuestionComponent } from '../tags-question/tags-question.component';

import { ReviewProcessComponent } from './review-process.component';

describe('ReviewProcessComponent', () => {
  let component: ReviewProcessComponent;
  let fixture: ComponentFixture<ReviewProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewProcessComponent, TagsQuestionComponent, ReviewSummaryComponent, ReviewQuestionComponent, QuestionComponent],
      imports: [MaterialModule, FormsModule, PipesModule],
      providers: [ReviewsService, MockReviewService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewProcessComponent);
    component = fixture.componentInstance;

    component.review = { questions: [] } as Review;
    component.itemId = '';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
