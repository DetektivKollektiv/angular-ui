import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Field } from '../../model/fields';
import { Question } from '../../model/question';

@Component({
  selector: 'app-review-question-content',
  templateUrl: './review-question-content.component.html',
  styleUrls: ['./review-question-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewQuestionContentComponent {
  @Input() question!: Question;
  @Input() position = 1;
  @Input() total = 1;

  trackFieldById(_index: number, field: Field): string {
    return field.id;
  }

  getFieldLabel(field: Field): string {
    switch (field.type) {
      case 'chip':
      case 'likert-scale':
      case 'text-area':
        return field.question ?? '';
      case 'traffic-light':
        return field.options?.[0]?.question ?? '';
      default:
        return '';
    }
  }
}
