import { Pipe, PipeTransform } from '@angular/core';
import { ItemReviewQuestion } from 'src/app/model/Item-review-question';

@Pipe({
  name: 'answerPercentage'
})
export class AnswerPercentagePipe implements PipeTransform {
  /**
   * Gets a rounded percentage of all answers with a specific option to a question.
   *
   * @param option The option to get the percentage of answers for.
   * @param questionId The ID of the question to get the percentages for.
   * @param questions The list of all questions.
   * @returns The rounded percentage of answers to a question with the given option.
   */
  transform(option: number, questionId: string, questions: ItemReviewQuestion[]): number {
    const filteredQuestions = questions.filter((q) => q.question_id === questionId && q.answer_value !== null);
    return Math.round((filteredQuestions.filter((q) => q.answer_value === option).length / filteredQuestions.length) * 100);
  }
}
