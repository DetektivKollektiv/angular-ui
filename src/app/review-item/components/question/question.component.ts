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
    console.log('yoooo')
    // if (hasChildren) {
      this.questions.forEach(question => {
        if (question.parent_question_id === this.question.question_id) {
          this.childQuestions.push(question);
          // const lowerBound = !!question.lower_bound ? question.lower_bound : 0;
          // const upperBound = !!question.upper_bound ? question.upper_bound : 1000;
          // const valueInBound = value && lowerBound <= value && upperBound >= value;

        }
      });
    // }
      
    // const hasChildren = this.childQuestions.length > 0;

    // if(value && valueInBound) {
    //   this.isShowChild = true;
    // }
    // if(hasChildren) {
    //   debugger
    // }
    // console.log({isShowChild: 
    //   this.isShowChild,
    //   hasChildren, 
    //   valueInBound,
    //   value,
    //   children: this.childQuestions})
  }

  showChildQuestions(value) {
    console.log(`showChildQuestions ${value}`)
    
    if(!value) {
      return;
    }

    this.visibleChildQuestions = [];
    this.isShowChild = false;
    this.childQuestions.forEach( question => {
      const valueInBound = question.lower_bound <= value && question.upper_bound >= value;
      console.log(`showChildQuetsions`,
        {
          valueInBound,
          lower: question.lower_bound,
          upper: question.upper_bound
        }
        )
      if(valueInBound) {
        this.isShowChild = true;
        this.visibleChildQuestions.push(question)  
      } 
    })

    console.log({visible: this.visibleChildQuestions})
  }

  change(e) {
    console.log(`its party time`)
    this.valueChange.emit();
    this.showChildQuestions(e.value)

    // this.visibleChildQuestions = [];
    // const valueInBound = this.question.lower_bound <= value && this.question.upper_bound >= value;
    
    // const hasChildren = this.childQuestions.length > 0;
    
    // if (hasChildren && valueInBound ) {
    //   this.isShowChild = true;
    // }
    
  }
}
