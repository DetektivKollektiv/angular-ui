import { Pipe, PipeTransform } from '@angular/core';
import { ItemReviewQuestion } from 'src/app/model/Item-review-question';

@Pipe({
  name: 'answerPercentage'
})
export class AnswerPercentagePipe implements PipeTransform {
  transform(option: number, questionId: string, questions: ItemReviewQuestion[]): number {
    const filteredQuestions = questions.filter((q) => q.question_id === questionId);
    return Math.round((filteredQuestions.filter((q) => q.answer_value === option).length / filteredQuestions.length) * 100);
  }
}
