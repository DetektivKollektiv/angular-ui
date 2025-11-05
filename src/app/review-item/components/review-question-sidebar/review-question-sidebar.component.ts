import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../model/question';

@Component({
  selector: 'app-review-question-sidebar',
  templateUrl: './review-question-sidebar.component.html',
  styleUrls: ['./review-question-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewQuestionSidebarComponent {
  @Input() questions: Question[] | null = [];
  @Input() currentQuestionId: string | null = null;

  @Output() questionSelected = new EventEmitter<string>();

  trackByQuestionId(_index: number, question: Question): string {
    return question.id;
  }

  onQuestionClick(questionId: string): void {
    if (this.currentQuestionId === questionId) {
      return;
    }

    this.questionSelected.emit(questionId);
  }
}
