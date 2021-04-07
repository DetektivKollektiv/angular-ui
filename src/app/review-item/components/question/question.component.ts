import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() public question: Question;

  @Output() public valueChange = new EventEmitter();

  change() {
    this.valueChange.emit();
  }
}
