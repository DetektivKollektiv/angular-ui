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
  @Input() totalQuestions = 0;
  @Input() currentPosition = 0;

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

  goToPrevious(): void {
    if (!this.hasPrevious()) {
      return;
    }

    const questions = this.questions ?? [];
    const currentIndex = this.getCurrentIndex();
    if (currentIndex > 0) {
      this.questionSelected.emit(questions[currentIndex - 1].id);
    }
  }

  goToNext(): void {
    if (!this.hasNext()) {
      return;
    }

    const questions = this.questions ?? [];
    const currentIndex = this.getCurrentIndex();
    if (currentIndex >= 0 && currentIndex < questions.length - 1) {
      this.questionSelected.emit(questions[currentIndex + 1].id);
    }
  }

  openQuestionMenu(): void {
    // Placeholder: will open menu in future iteration
    // eslint-disable-next-line no-console
    console.log('Question menu clicked');
  }

  get currentQuestion(): Question | null {
    if (!this.questions || !this.currentQuestionId) {
      return null;
    }

    return this.questions.find((question) => question.id === this.currentQuestionId) ?? null;
  }

  hasPrevious(): boolean {
    return this.getCurrentIndex() > 0;
  }

  hasNext(): boolean {
    const questions = this.questions ?? [];
    const idx = this.getCurrentIndex();
    return idx >= 0 && idx < questions.length - 1;
  }

  private getCurrentIndex(): number {
    if (!this.questions || !this.currentQuestionId) {
      return -1;
    }

    return this.questions.findIndex((question) => question.id === this.currentQuestionId);
  }
}
