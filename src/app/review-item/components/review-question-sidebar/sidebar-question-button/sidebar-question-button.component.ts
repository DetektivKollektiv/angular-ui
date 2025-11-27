import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../../model/question';

@Component({
  selector: 'app-sidebar-question-button',
  templateUrl: './sidebar-question-button.component.html',
  styleUrls: ['./sidebar-question-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarQuestionButtonComponent {
  @Input() question!: Question;
  @Input() active = false;
  @Input() variant: 'default' | 'mobile' = 'default';
  @Input() indentLevel = 0;
  @Input() disabled = false;
  @Output() pressed = new EventEmitter<void>();

  onClick(): void {
    if (this.disabled) {
      return;
    }

    if (this.question?.is_disabled) {
      return;
    }

    this.pressed.emit();
  }

  get indentClass(): string {
    return `sidebar-question-button__indent--${this.indentLevel}`;
  }
}
