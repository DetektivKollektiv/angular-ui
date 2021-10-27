import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionContributorsPipe } from '@shared/pipes/question-contributors.pipe';
import { ItemReviewQuestion } from '../../../model/Item-review-question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent implements OnInit {
  @Input() question: ItemReviewQuestion;
  @Input() questions: ItemReviewQuestion[];
  @Input() index: number;
  @Input() isChild: boolean;
  @Input() displayOnly: boolean;
  @Input() parentIndex = -1;

  @Output() valueChange = new EventEmitter();

  isShowChild: boolean;
  childQuestions: ItemReviewQuestion[] = [];
  visibleChildQuestions: ItemReviewQuestion[] = [];
  title: string;

  private alphbt = 'abcdefghijklmnopqrstuvwxyz';

  constructor(private questionContributorsPipe: QuestionContributorsPipe) {}

  ngOnInit(): void {
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
      if (
        question.parent_question_id === this.question.question_id &&
        !this.childQuestions.find((q) => q.question_id === question.question_id)
      ) {
        this.childQuestions.push(question);
      }
    });
  }

  showChildQuestions(value) {
    if (value === null || value === undefined) {
      return;
    }

    this.visibleChildQuestions = [];
    this.isShowChild = false;

    const questions = this.questions.filter((q) => q.question_id === this.question.question_id);

    this.childQuestions.forEach((question) => {
      const valueInBound = questions.find((q) => question.lower_bound <= q.answer_value && question.upper_bound >= q.answer_value);
      // const valueInBound = question.lower_bound <= value && question.upper_bound >= value;

      if (valueInBound) {
        this.isShowChild = true;
        this.visibleChildQuestions.push(question);
      }
    });
  }

  getContributors(value: number) {
    return this.questionContributorsPipe.transform(value, this.question.question_id, this.questions);
  }

  onQuestionValueChange(e: number) {
    this.valueChange.emit();
    this.showChildQuestions(e);
  }
}
