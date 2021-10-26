import { Pipe, PipeTransform } from '@angular/core';
import { Detective } from '../../model/detective';
import { ItemReviewQuestion } from '../../model/Item-review-question';

@Pipe({
  name: 'questionContributors'
})
export class QuestionContributorsPipe implements PipeTransform {
  transform(option: number, questionId: string, questions: ItemReviewQuestion[]): Detective[] {
    return questions.filter((q) => q.question_id === questionId && option === q.answer_value).map((q) => q.detective);
  }
}
