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
  @Input() public contributors: any[];
  @Input() public index: number;
  @Input() public isChild: boolean;
  @Input() public displayOnly: boolean;
  @Input() public percentageVoted: number;

  @Input() public parentIndex = -1;
  @Output() public valueChange = new EventEmitter();
  public isShowChild: boolean;
  public childQuestions: Question[] = [];
  public visibleChildQuestions: Question[] = [];
  public title: string;
  public alphbt = 'abcdefghijklmnopqrstuvwxyz';


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
    this.addChildQuestions()
    this.showChildQuestions(this.question.answer_value)
  }

  addChildQuestions() {
    const value = this.question.answer_value;
    const hasChildren = this.question.max_children > 0
    if(!hasChildren) {
      return
    }
    this.questions.forEach(question => {
      if (question.parent_question_id === this.question.question_id) {
        this.childQuestions.push(question);
      }
    });
  }

  showChildQuestions(value) {
    
    if(!value) {
      return;
    }

    this.visibleChildQuestions = [];
    this.isShowChild = false;
    this.childQuestions.forEach( question => {
      const valueInBound = question.lower_bound <= value && question.upper_bound >= value;
      
      if(valueInBound) {
        this.isShowChild = true;
        this.visibleChildQuestions.push(question)  
      } 
    })
  }

  change(e) {
    this.valueChange.emit();
    this.showChildQuestions(e.value)
  }
}
