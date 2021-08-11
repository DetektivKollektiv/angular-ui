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
  @Input() public isChild: boolean;
  @Input() public parentIndex = -1;
  public isShowChild: boolean;
  public childQuestions: Question[] = [];
  public title: string;
  public alphbt = 'abcdefghijklmnopqrstuvwxyz';

  @Output() public valueChange = new EventEmitter();

  ngOnInit(): void {
    this.question.options = this.question.options.sort((a, b) =>
      a.value > b.value ? -1 : 1
    );

    this.isShowChild = false;
    if (this.parentIndex === -1) {
      this.title = `Frage ${this.index + 1}`;
    } else {
      this.title = `Frage ${this.parentIndex + 1}${this.alphbt[this.index]}`;
    }
  }

  change(e) {
    this.childQuestions = [];
    if (this.question.max_children > 0) {
      this.questions.forEach(question => {
        if (question.parent_question_id === this.question.question_id && question.lower_bound < e.value && question.upper_bound > e.value) {
          this.childQuestions.push(question);
        }
      });
    }

    if (this.childQuestions.length > 0) {
      this.isShowChild = true;
    }
  }
}
