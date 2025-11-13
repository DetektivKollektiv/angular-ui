import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ChipField, Field, LikertScaleField, MultiLineTextField, TextAreaField, TraficLightField } from '../../model/fields';
import { QuestionAnswerChange } from '../../model/field-answer-change';
import { Question } from '../../model/question';
import { Review } from '../../model/review';
import { ReviewsService } from '../../services/reviews/reviews.service';
import { ReviewVisibilityService } from '../../services/review-visibility/review-visibility.service';

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

  constructor(private reviewsService: ReviewsService, private reviewVisibilityService: ReviewVisibilityService) {
    this.reviewsService
      .getOpenReview()
      .pipe(take(1))
      .subscribe((review) => {
        const preparedReview = this.ensureVisibility(review);
        this.ensureCurrentQuestion(preparedReview);
        this.reviewSubject.next(preparedReview);
      });
  }

  onQuestionSelected(questionId: string): void {
    const review = this.reviewSubject.getValue();
    if (!review) {
      return;
    }

    this.ensureCurrentQuestion(review, questionId);
  }

  onAnswerChange(change: QuestionAnswerChange): void {
    const currentReview = this.reviewSubject.getValue();
    if (!currentReview) {
      return;
    }

    const updatedAnswersReview = this.applyAnswerChange(currentReview, change);
    if (!updatedAnswersReview) {
      return;
    }

    const preparedReview = this.ensureVisibility(updatedAnswersReview);
    this.ensureCurrentQuestion(preparedReview, this.currentQuestionId);
    this.reviewSubject.next(preparedReview);
    this.logReview(preparedReview);
  }

  goToNextQuestion(review: Review): void {
    const nextVisibleQuestion = this.findNextVisibleQuestion(review, this.currentQuestionId);
    if (nextVisibleQuestion) {
      this.currentQuestionId = nextVisibleQuestion.id;
    }
  }

  getCurrentQuestion(review: Review): Question | undefined {
    return this.getVisibleQuestions(review).find((question) => question.id === this.currentQuestionId);
  }

  getQuestionPosition(review: Review, questionId: string): number {
    const visibleQuestions = this.getVisibleQuestions(review);
    const index = visibleQuestions.findIndex((question) => question.id === questionId);
    if (index === -1) {
      return visibleQuestions.length ? 1 : 0;
    }

    return index + 1;
  }

  private ensureCurrentQuestion(review: Review | null, preferredQuestionId?: string): void {
    if (!review?.questions?.length) {
      this.currentQuestionId = null;
      return;
    }

    const visibleQuestions = this.getVisibleQuestions(review);
    if (!visibleQuestions.length) {
      this.currentQuestionId = null;
      return;
    }

    const desiredId = preferredQuestionId ?? this.currentQuestionId;
    if (desiredId) {
      const stillVisible = visibleQuestions.find((question) => question.id === desiredId);
      if (stillVisible) {
        this.currentQuestionId = stillVisible.id;
        return;
      }

      const nextVisible = this.findNextVisibleQuestion(review, desiredId);
      if (nextVisible) {
        this.currentQuestionId = nextVisible.id;
        return;
      }

      const previousVisible = this.findPreviousVisibleQuestion(review, desiredId);
      if (previousVisible) {
        this.currentQuestionId = previousVisible.id;
        return;
      }
    }

    this.currentQuestionId = visibleQuestions[0].id;
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
    const cleaned = this.reviewVisibilityService.stripHiddenFieldAnswers(review);
    // eslint-disable-next-line no-console
    console.log('[Review Debug] Sanitized payload:', cleaned);
  }

  private ensureVisibility(review: Review): Review {
    return this.reviewVisibilityService.applyVisibility(review) ?? review;
  }

  getVisibleQuestions(review: Review): Question[] {
    return review.questions?.filter((question) => question.visible !== false) ?? [];
  }

  private findNextVisibleQuestion(review: Review, fromQuestionId: string | null): Question | null {
    if (!fromQuestionId || !review?.questions?.length) {
      return null;
    }

    const currentIndex = review.questions.findIndex((question) => question.id === fromQuestionId);
    if (currentIndex === -1) {
      return null;
    }

    for (let i = currentIndex + 1; i < review.questions.length; i += 1) {
      const candidate = review.questions[i];
      if (candidate.visible !== false) {
        return candidate;
      }
    }

    return null;
  }

  private findPreviousVisibleQuestion(review: Review, fromQuestionId: string | null): Question | null {
    if (!fromQuestionId || !review?.questions?.length) {
      return null;
    }

    const currentIndex = review.questions.findIndex((question) => question.id === fromQuestionId);
    if (currentIndex === -1) {
      return null;
    }

    for (let i = currentIndex - 1; i >= 0; i -= 1) {
      const candidate = review.questions[i];
      if (candidate.visible !== false) {
        return candidate;
      }
    }

    return null;
  }
}
