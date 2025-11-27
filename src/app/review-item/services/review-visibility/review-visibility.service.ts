import { Injectable } from '@angular/core';
import { Condition } from '../../model/condition';
import { Field } from '../../model/fields';
import { Question } from '../../model/question';
import { Review } from '../../model/review';

type FieldAnswerValue = string | number | boolean | string[] | null;

@Injectable({
  providedIn: 'root'
})
export class ReviewVisibilityService {
  applyVisibility(review: Review | null): Review | null {
    if (!review || !review.questions) {
      return review;
    }

    const lookup = this.buildFieldLookup(review.questions);

    const questions = review.questions.map((question) => this.applyQuestionVisibility(question, lookup));

    return {
      ...review,
      questions
    };
  }

  stripHiddenFieldAnswers(review: Review | null): Review | null {
    if (!review || !review.questions) {
      return review;
    }

    const questions = review.questions.map((question) => ({
      ...question,
      fields: question.fields.map((field) => (field.is_visible === false ? this.clearFieldAnswer(field) : field))
    }));

    return {
      ...review,
      questions
    };
  }

  private applyQuestionVisibility(question: Question, lookup: Map<string, Field>): Question {
    const fields = question.fields.map((field) => this.applyFieldVisibility(field, lookup));
    const hasVisibleFields = fields.some((field) => field.is_visible !== false);
    const questionHasFields = question.fields.length > 0;

    return {
      ...question,
      fields,
      is_visible: questionHasFields ? hasVisibleFields : true
    };
  }

  private applyFieldVisibility(field: Field, lookup: Map<string, Field>): Field {
    const is_visible = this.evaluateConditions(field.conditions, lookup);
    return {
      ...field,
      is_visible
    };
  }

  private evaluateConditions(conditions: Condition[] | undefined, lookup: Map<string, Field>): boolean {
    if (!conditions?.length) {
      return true;
    }

    return conditions.every((condition) => this.evaluateCondition(condition, lookup));
  }

  private evaluateCondition(condition: Condition, lookup: Map<string, Field>): boolean {
    const field = lookup.get(condition.field_id);
    if (!field) {
      return false;
    }

    const answerValue = this.getFieldAnswer(field);

    switch (condition.operator) {
      case 'has_answer':
        return this.hasAnswer(answerValue);
      case 'equals':
        return this.equalsAnswer(answerValue, condition.value);
      case '>':
      case '<':
        return this.compareAnswer(answerValue, condition.value, condition.operator);
      default:
        return true;
    }
  }

  private hasAnswer(value: FieldAnswerValue): boolean {
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

  private equalsAnswer(answer: FieldAnswerValue, expected: string | number | boolean): boolean {
    if (Array.isArray(answer)) {
      return answer.some((value) => value === expected);
    }

    return answer === expected;
  }

  private compareAnswer(answer: FieldAnswerValue, expected: number, operator: '>' | '<'): boolean {
    if (typeof answer !== 'number') {
      return false;
    }

    return operator === '>' ? answer > expected : answer < expected;
  }

  private getFieldAnswer(field: Field): FieldAnswerValue {
    switch (field.type) {
      case 'chip':
      case 'multi-line-text':
        return field.answer_value;
      case 'traffic-light':
      case 'likert-scale':
        return field.answer_value;
      case 'text-area':
        return field.answer_value;
      default:
        return null;
    }
  }

  private clearFieldAnswer(field: Field): Field {
    switch (field.type) {
      case 'chip':
      case 'multi-line-text':
      case 'likert-scale':
      case 'traffic-light':
      case 'text-area':
        return { ...field, answer_value: null };
      default:
        return field;
    }
  }

  private buildFieldLookup(questions: Question[]): Map<string, Field> {
    const lookup = new Map<string, Field>();

    questions.forEach((question) => {
      question.fields.forEach((field) => {
        lookup.set(field.id, field);
      });
    });

    return lookup;
  }
}

