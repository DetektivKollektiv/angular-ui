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
  @Input() public questions: Question[];
  @Input() public index: number;
  public isShowChild: boolean;
  public childQuestions: Question[] = [];

  @Output() public valueChange = new EventEmitter();

  ngOnInit(): void {
    this.question.options = this.question.options.sort((a, b) =>
      a.value > b.value ? -1 : 1
    );

    if (this.question.max_children > 0) {
      this.questions.forEach(question => {
        if (question.parent_question_id === this.question.question_id) {
          this.childQuestions.push(question);
        }
      });
    }

    this.isShowChild = false;
  }

  change(e) {
    if (this.question.lower_bound < e.target.value && e.target.value < this.question.upper_bound) {
      this.isShowChild = true;
    }
    console.log(e.value)
  }
}
