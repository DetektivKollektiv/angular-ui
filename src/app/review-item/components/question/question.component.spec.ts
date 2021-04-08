import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuestionComponent } from './question.component';
import { Question } from '../../model/question';
import { MaterialModule } from '../../../shared/material/material.module';
import { FormsModule } from '@angular/forms';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [MaterialModule, FormsModule],
        declarations: [QuestionComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    component.question = {
      answer_id: '0',
      question_id: '1',
      content: 'Test Content',
      info: 'Test Info',
      hint: 'Test Hint',
      lower_bound: null,
      upper_bound: null,
      parent_question_id: null,
      max_children: 0,
      answer_value: null,
      comment: null,
      options: [],
    } as Question;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
