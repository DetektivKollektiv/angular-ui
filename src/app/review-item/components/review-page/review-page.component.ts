import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { QuestionAnswerChange } from '../../model/field-answer-change';
import { ChipField, Field, LikertScaleField, MultiLineTextField, TextAreaField, TraficLightField } from '../../model/fields';
import { Question } from '../../model/question';
import { Review } from '../../model/review';
import { ReviewVisibilityService } from '../../services/review-visibility/review-visibility.service';
import { ReviewsService } from '../../services/reviews/reviews.service';

const SUBMIT_QUESTION_ID = 'submit_question';

interface ReviewState {
  review: Review | null;
  currentQuestionId: string | null;
}

type ReviewAction =
  | { type: 'REVIEW_LOADED'; review: Review }
  | { type: 'ANSWER_CHANGED'; change: QuestionAnswerChange }
  | { type: 'QUESTION_SELECTED'; questionId: string }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREVIOUS_QUESTION' };

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewPageComponent {
  private stateSubject = new BehaviorSubject<ReviewState>({
    review: null,
    currentQuestionId: null
  });
  readonly state$ = this.stateSubject.asObservable();

  breadcrumbLinks: BreadcrumbLink[] = [{ label: 'Fallbearbeitung' }];

  constructor(private reviewsService: ReviewsService, private reviewVisibilityService: ReviewVisibilityService) {
    this.reviewsService
      .getOpenReview()
      .pipe(take(1))
      .subscribe((review) => {
        const preparedReview = this.prepareReview(review, null);
        this.updateState({ type: 'REVIEW_LOADED', review: preparedReview });
      });
  }

  onQuestionSelected(questionId: string): void {
    this.updateState({ type: 'QUESTION_SELECTED', questionId });
  }

  onAnswerChange(change: QuestionAnswerChange): void {
    this.updateState({ type: 'ANSWER_CHANGED', change });
  }

  onNextQuestion(): void {
    this.updateState({ type: 'NEXT_QUESTION' });
  }

  onPreviousQuestion(): void {
    this.updateState({ type: 'PREVIOUS_QUESTION' });
  }

  getCurrentQuestion(state: ReviewState): Question | null {
    if (!state.review || !state.currentQuestionId) {
      return null;
    }
    return this.getVisibleQuestions(state.review).find((q) => q.id === state.currentQuestionId) ?? null;
  }

  getQuestionPosition(review: Review, questionId: string | null): number {
    if (!questionId) {
      return 0;
    }
    const visibleQuestions = this.getVisibleQuestions(review);
    const index = visibleQuestions.findIndex((q) => q.id === questionId);
    return index === -1 ? 0 : index + 1;
  }

  getVisibleQuestions(review: Review): Question[] {
    return review.questions?.filter((q) => q.is_visible !== false) ?? [];
  }

  private updateState(action: ReviewAction): void {
    const newState = this.reduceState(this.stateSubject.getValue(), action);
    this.stateSubject.next(newState);

    if (action.type === 'ANSWER_CHANGED' && newState.review) {
      this.logReview(newState.review);
    }
  }

  private reduceState(state: ReviewState, action: ReviewAction): ReviewState {
    switch (action.type) {
      case 'REVIEW_LOADED':
        return {
          review: action.review,
          currentQuestionId: this.resolveQuestionId(action.review, null)
        };

      case 'QUESTION_SELECTED':
        return {
          ...state,
          ...this.applyVisited(state, this.resolveQuestionId(state.review, action.questionId))
        };

      case 'ANSWER_CHANGED': {
        const updatedReview = this.applyAnswerChange(state.review, action.change);
        if (!updatedReview) {
          return state;
        }

        const preparedReview = this.prepareReview(updatedReview, state.currentQuestionId);
        return {
          review: preparedReview,
          currentQuestionId: this.resolveQuestionId(preparedReview, state.currentQuestionId)
        };
      }

      case 'NEXT_QUESTION': {
        const nextQuestionId = this.findNextVisibleQuestionId(state.review, state.currentQuestionId);
        return {
          ...state,
          ...this.applyVisited(state, nextQuestionId)
        };
      }

      case 'PREVIOUS_QUESTION': {
        const previousQuestionId = this.findPreviousVisibleQuestionId(state.review, state.currentQuestionId);
        return {
          ...state,
          ...this.applyVisited(state, previousQuestionId)
        };
      }

      default:
        return state;
    }
  }

  private resolveQuestionId(review: Review | null, requestedId: string | null): string | null {
    if (!review) {
      return null;
    }

    const visibleQuestions = this.getVisibleQuestions(review);
    if (!visibleQuestions.length) {
      return null;
    }

    // If no requested ID, use first visible (default)
    if (!requestedId) {
      return visibleQuestions[0].id;
    }

    // If requested ID is visible, use it
    const requestedQuestion = visibleQuestions.find((q) => q.id === requestedId);
    if (requestedQuestion) {
      return requestedId;
    }

    // Fallback: find closest previous visible question
    const allQuestions = review.questions;
    const requestedIndex = allQuestions.findIndex((q) => q.id === requestedId);

    if (requestedIndex === -1) {
      // Requested ID doesn't exist at all, use first visible
      return visibleQuestions[0].id;
    }

    // Search backward from requestedIndex
    for (let i = requestedIndex - 1; i >= 0; i -= 1) {
      if (allQuestions[i].is_visible !== false) {
        return allQuestions[i].id;
      }
    }

    // No previous visible found, use first visible (going forward)
    return visibleQuestions[0].id;
  }

  private findNextVisibleQuestionId(review: Review | null, fromQuestionId: string | null): string | null {
    if (!fromQuestionId || !review?.questions?.length) {
      return null;
    }

    const currentIndex = review.questions.findIndex((q) => q.id === fromQuestionId);
    if (currentIndex === -1) {
      return null;
    }

    for (let i = currentIndex + 1; i < review.questions.length; i += 1) {
      const candidate = review.questions[i];
      if (candidate.is_visible !== false) {
        return candidate.id;
      }
    }

    return null;
  }

  private findPreviousVisibleQuestionId(review: Review | null, fromQuestionId: string | null): string | null {
    if (!fromQuestionId || !review?.questions?.length) {
      return null;
    }

    const currentIndex = review.questions.findIndex((q) => q.id === fromQuestionId);
    if (currentIndex <= 0) {
      return null;
    }

    for (let i = currentIndex - 1; i >= 0; i -= 1) {
      const candidate = review.questions[i];
      if (candidate.is_visible !== false) {
        return candidate.id;
      }
    }

    return null;
  }

  private markQuestionVisited(review: Review | null, questionId: string | null): Review | null {
    if (!review || !questionId) {
      return review;
    }

    const index = review.questions.findIndex((q) => q.id === questionId);
    if (index === -1) {
      return review;
    }

    const question = review.questions[index];
    if (question.is_visited) {
      return review;
    }

    const updatedQuestion: Question = {
      ...question,
      is_visited: true
    };

    const updatedQuestions = [...review.questions];
    updatedQuestions[index] = updatedQuestion;

    return {
      ...review,
      questions: updatedQuestions
    };
  }

  private applyVisited(state: ReviewState, targetQuestionId: string | null): { currentQuestionId: string | null; review: Review | null } {
    if (!targetQuestionId || targetQuestionId === state.currentQuestionId) {
      return {
        currentQuestionId: state.currentQuestionId,
        review: state.review
      };
    }

    const reviewWithVisited = this.markQuestionVisited(state.review, state.currentQuestionId);
    if (targetQuestionId === SUBMIT_QUESTION_ID) {
      return {
        currentQuestionId: targetQuestionId,
        review: this.markAllVisited(reviewWithVisited)
      };
    }

    return {
      currentQuestionId: targetQuestionId,
      review: reviewWithVisited
    };
  }

  private prepareReview(review: Review | null, currentQuestionId: string | null): Review | null {
    if (!review) {
      return review;
    }

    const withVisibility = this.ensureVisibility(review);
    const withValidation = this.applyValidation(withVisibility) ?? withVisibility;
    const withSubmitState = this.applySubmitAvailability(withValidation);

    if (currentQuestionId === SUBMIT_QUESTION_ID) {
      return this.markAllVisited(withSubmitState);
    }

    return withSubmitState;
  }

  private applyValidation(review: Review | null): Review | null {
    if (!review?.questions?.length) {
      return review;
    }

    const questions = review.questions.map((question) => ({
      ...question,
      has_error: this.questionHasErrors(question),
      is_answered: this.questionIsAnswered(question)
    }));

    return {
      ...review,
      questions
    };
  }

  private applySubmitAvailability(review: Review): Review {
    const hasBlockingErrors = review.questions.some((question) => question.id !== SUBMIT_QUESTION_ID && question.has_error);

    const questions = review.questions.map((question) =>
      question.id === SUBMIT_QUESTION_ID
        ? {
            ...question,
            is_disabled: hasBlockingErrors
          }
        : question
    );

    return { ...review, questions };
  }

  private questionHasErrors(question: Question): boolean {
    const visibleFields = question.fields?.filter((field) => field.is_visible !== false) ?? [];
    return visibleFields.some((field) => field.is_required && !this.hasAnswer(field));
  }

  private questionIsAnswered(question: Question): boolean {
    const visibleFields = question.fields?.filter((field) => field.is_visible !== false) ?? [];
    return visibleFields.some((field) => this.hasAnswer(field));
  }

  private hasAnswer(field: Field): boolean {
    const value = field.answer_value as unknown;

    if (value === null || value === undefined) {
      return false;
    }

    if (Array.isArray(value)) {
      return value.length > 0;
    }

    if (typeof value === 'string') {
      return value.trim().length > 0;
    }

    return true;
  }

  private markAllVisited(review: Review | null): Review | null {
    if (!review?.questions?.length) {
      return review;
    }

    const questions = review.questions.map((question) =>
      question.is_visited ? question : { ...question, is_visited: true }
    );

    return { ...review, questions };
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
    return this.reviewVisibilityService.applyVisibility(review);
  }
}
