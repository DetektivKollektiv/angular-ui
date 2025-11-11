import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ChipField, Field, LikertScaleField, MultiLineTextField, TextAreaField, TraficLightField } from '../../model/fields';
import { QuestionAnswerChange } from '../../model/field-answer-change';
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
  private reviewSubject = new BehaviorSubject<Review | null>(null);
  review$: Observable<Review | null> = this.reviewSubject.asObservable();

  breadcrumbLinks: BreadcrumbLink[] = [{ label: 'Fallbearbeitung' }];

  constructor(private reviewsService: ReviewsService) {
    this.reviewsService
      .getOpenReview()
      .pipe(take(1))
      .subscribe((review) => {
        this.ensureCurrentQuestion(review);
        this.reviewSubject.next(review);
      });
  }

  onQuestionSelected(questionId: string): void {
    this.currentQuestionId = questionId;
  }

  onAnswerChange(change: QuestionAnswerChange): void {
    const currentReview = this.reviewSubject.getValue();
    if (!currentReview) {
      return;
    }

    const updatedReview = this.applyAnswerChange(currentReview, change);
    if (!updatedReview) {
      return;
    }

    this.ensureCurrentQuestion(updatedReview);
    this.reviewSubject.next(updatedReview);
    this.logReview(updatedReview);
  }

  goToNextQuestion(review: Review): void {
    if (!this.currentQuestionId || !review?.questions?.length) {
      return;
    }

    const currentIndex = review.questions.findIndex((question) => question.id === this.currentQuestionId);
    const nextQuestion = currentIndex >= 0 ? review.questions[currentIndex + 1] : null;

    if (nextQuestion) {
      this.currentQuestionId = nextQuestion.id;
    }
  }

  getCurrentQuestion(review: Review): Question | undefined {
    return review.questions?.find((question) => question.id === this.currentQuestionId);
  }

  getQuestionPosition(review: Review, questionId: string): number {
    const index = review.questions.findIndex((question) => question.id === questionId);
    return index >= 0 ? index + 1 : 1;
  }

  private ensureCurrentQuestion(review: Review | null): void {
    if (!review?.questions?.length) {
      this.currentQuestionId = null;
      return;
    }

    const currentStillExists = review.questions.some((question) => question.id === this.currentQuestionId);
    if (!this.currentQuestionId || !currentStillExists) {
      this.currentQuestionId = review.questions[0].id;
    }
  }

  private applyAnswerChange(review: Review, change: QuestionAnswerChange): Review | null {
    const questionIndex = review.questions.findIndex((question) => question.id === change.questionId);
    if (questionIndex === -1) {
      return null;
    }

    const question = review.questions[questionIndex];
    const fieldIndex = question.fields.findIndex((field) => field.id === change.fieldId);
    if (fieldIndex === -1) {
      return null;
    }

    const updatedField = this.buildUpdatedField(question.fields[fieldIndex], change);
    if (!updatedField) {
      return null;
    }

    const updatedFields = [...question.fields];
    updatedFields[fieldIndex] = updatedField;

    const updatedQuestion = {
      ...question,
      fields: updatedFields
    };

    const updatedQuestions = [...review.questions];
    updatedQuestions[questionIndex] = updatedQuestion;

    return {
      ...review,
      questions: updatedQuestions
    };
  }

  private buildUpdatedField(field: Field, change: QuestionAnswerChange): Field | null {
    if (field.id !== change.fieldId || field.type !== change.fieldType) {
      return null;
    }

    switch (change.fieldType) {
      case 'chip':
        return {
          ...(field as ChipField),
          answer_value: change.value as ChipField['answer_value']
        };
      case 'multi-line-text':
        return {
          ...(field as MultiLineTextField),
          answer_value: change.value as MultiLineTextField['answer_value']
        };
      case 'text-area':
        return {
          ...(field as TextAreaField),
          answer_value: change.value as TextAreaField['answer_value']
        };
      case 'likert-scale':
        return {
          ...(field as LikertScaleField),
          answer_value: change.value as LikertScaleField['answer_value']
        };
      case 'traffic-light':
        return {
          ...(field as TraficLightField),
          answer_value: change.value as TraficLightField['answer_value']
        };
      default:
        return null;
    }
  }

  private logReview(review: Review): void {
    // eslint-disable-next-line no-console
    console.log('[Review Debug] Updated review:', review);
  }
}
