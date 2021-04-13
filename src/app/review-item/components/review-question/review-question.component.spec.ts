import { CdkStepper } from '@angular/cdk/stepper';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { Question } from '../../model/question';
import { QuestionComponent } from '../question/question.component';

import { ReviewQuestionComponent } from './review-question.component';

describe('ReviewQuestionComponent', () => {
  let component: ReviewQuestionComponent;
  let fixture: ComponentFixture<ReviewQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewQuestionComponent, QuestionComponent],
      imports: [MaterialModule, FormsModule],
      providers: [{ provide: CdkStepper, useValue: {} }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewQuestionComponent);
    component = fixture.componentInstance;

    component.question = { options: [] } as Question;
    component.childQuestions = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
