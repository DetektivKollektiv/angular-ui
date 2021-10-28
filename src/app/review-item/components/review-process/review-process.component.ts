import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Question } from '../../model/question';
import { Review } from '../../model/review';
import { ReviewsService } from '../../services/reviews/reviews.service';
import { TagsQuestionComponent } from '../tags-question/tags-question.component';

@Component({
  selector: 'app-review-process',
  templateUrl: './review-process.component.html',
  styleUrls: ['./review-process.component.scss']
})
export class ReviewProcessComponent {
  @Input() public review: Review;
  @Input() public itemId: string;

  @Output() public reviewFinish = new EventEmitter();

  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('tags') tagsComponent: TagsQuestionComponent;

  constructor(private reviewService: ReviewsService) {}

  public get parentQuestions(): Question[] {
    return this.review.questions.filter((q) => !q.parent_question_id);
  }

  public getChildQuestions(parent_question_id: string): Question[] {
    return this.review.questions.filter((q) => q.parent_question_id === parent_question_id);
  }

  public updateReview() {
    this.stepper.selected.completed = true;
    this.stepper.next();
    this.reviewService.updateReview(this.review);
  }

  public finishReview() {
    // this.tagsComponent.submitTags();
    this.reviewFinish.emit();
  }
}
