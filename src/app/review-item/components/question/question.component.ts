import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionContributorsPipe } from '@shared/pipes/question-contributors.pipe';
import { Detective } from 'src/app/model/detective';
import { ItemReviewQuestion } from 'src/app/model/Item-review-question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent implements OnInit {
  @Input() public question: ItemReviewQuestion;
  @Input() public questions: ItemReviewQuestion[];
  @Input() public index: number;
  @Input() public isChild: boolean;
  @Input() public displayOnly: boolean;
  @Input() public percentageVoted: number;

  @Input() public parentIndex = -1;
  @Output() public valueChange = new EventEmitter();
  public isShowChild: boolean;
  public childQuestions: ItemReviewQuestion[] = [];
  public visibleChildQuestions: ItemReviewQuestion[] = [];
  public title: string;
  public alphbt = 'abcdefghijklmnopqrstuvwxyz';

  constructor(private questionContributorsPipe: QuestionContributorsPipe) {}

  ngOnInit(): void {
    // this.question.options = this.question.options.sort((a, b) =>
    //   a.value > b.value ? -1 : 1
    // );

    this.isShowChild = false;
    if (this.parentIndex === -1) {
      this.title = `Frage ${this.index + 1}`;
    } else {
      this.title = `Frage ${this.parentIndex + 1}${this.alphbt[this.index]}`;
    }
    this.addChildQuestions();
    this.showChildQuestions(this.question.answer_value);
  }

  addChildQuestions() {
    const hasChildren = this.question.max_children > 0;
    if (!hasChildren) {
      return;
    }
    this.questions.forEach((question) => {
      if (question.parent_question_id === this.question.question_id) {
        this.childQuestions.push(question);
      }
    });
  }

  showChildQuestions(value) {
    if (!value) {
      return;
    }

    this.visibleChildQuestions = [];
    this.isShowChild = false;
    this.childQuestions.forEach((question) => {
      const valueInBound = question.lower_bound <= value && question.upper_bound >= value;

      if (valueInBound) {
        this.isShowChild = true;
        this.visibleChildQuestions.push(question);
      }
    });
  }

  getContributors(value: number) {
    return this.questionContributorsPipe.transform(value, this.question.question_id, this.questions);
  }

  change(e) {
    this.valueChange.emit();
    this.showChildQuestions(e.value);
  }
}
