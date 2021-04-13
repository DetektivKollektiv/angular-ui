import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Question } from '../../model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() public question: Question;

  @Output() public valueChange = new EventEmitter();

  ngOnInit(): void {
    this.question.options = this.question.options.sort((a, b) =>
      a.value > b.value ? -1 : 1
    );
  }

  change() {
    this.valueChange.emit();
  }
}
