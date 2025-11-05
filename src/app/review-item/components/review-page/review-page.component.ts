import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Field } from '../../model/fields';
import { Question } from '../../model/question';
import { Review } from '../../model/review';
import { ReviewsService } from '../../services/reviews/reviews.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewPageComponent {
  currentQuestionId: string | null = null;
  review$: Observable<Review> = this.reviewsService.getOpenReview().pipe(
    tap(review => {
      const hasQuestions = review?.questions?.length;
      if (!hasQuestions) {
        this.currentQuestionId = null;
        return;
      }

      const currentStillExists = review.questions.some(question => question.id === this.currentQuestionId);
      if (!this.currentQuestionId || !currentStillExists) {
        this.currentQuestionId = review.questions[0].id;
      }
    })
  );

  breadcrumbLinks: BreadcrumbLink[] = [{ label: 'Fallbearbeitung' }];

  constructor(private reviewsService: ReviewsService) {}

  trackFieldById(_index: number, field: Field): string {
    return field.id;
  }

  onQuestionSelected(questionId: string): void {
    this.currentQuestionId = questionId;
  }

  getCurrentQuestion(review: Review): Question | undefined {
    return review.questions?.find(question => question.id === this.currentQuestionId);
  }

  getQuestionPosition(review: Review, questionId: string): number {
    const index = review.questions.findIndex(question => question.id === questionId);
    return index >= 0 ? index + 1 : 1;
  }

  getFieldLabel(field: Field): string {
    switch (field.type) {
      case 'chip':
      case 'likert-scale':
      case 'text-area':
        return field.question ?? '';
      case 'traffic-light':
        return field.options?.[0]?.question ?? '';
      default:
        return '';
    }
  }
}
