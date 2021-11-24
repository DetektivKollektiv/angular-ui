import { Pipe, PipeTransform } from '@angular/core';
import { Detective } from '../../../model/detective';
import { ItemReviewQuestion } from '../../../model/Item-review-question';

@Pipe({
  name: 'questionContributors'
})
export class QuestionContributorsPipe implements PipeTransform {
  /**
   * Returns a list off all detectives, that answered a specific question with a specific option.
   *
   * @param option The value of the answer to filter for.
   * @param questionId The ID of the question to filter for.
   * @param questions The list of all questions answered for the review.
   * @returns A list of all detectives that answered the given question (identified by questionId) with the given option.
   */
  transform(option: number, questionId: string, questions: ItemReviewQuestion[]): Detective[] {
    return questions.filter((q) => q.question_id === questionId && q.answer_value === option).map((q) => q.detective);
  }
}
