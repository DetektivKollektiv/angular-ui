import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Field } from '../../model/fields';
import { Question } from '../../model/question';
import { Review } from '../../model/review';
import { ReviewsService } from '../../services/reviews/reviews.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewPageComponent {
  review$: Observable<Review> = this.reviewsService.getOpenReview();

  constructor(private reviewsService: ReviewsService) {}

  trackSlideById(_index: number, slide: Question): string {
    return slide.id;
  }

  trackFieldById(_index: number, field: Field): string {
    return field.id;
  }

  getFieldLabel(field: Field): string {
    switch (field.type) {
      case 'chip':
      case 'likert-scale':
      case 'text-area':
        return field.question ?? '';
      case 'traffic-light':
        return field.options?.[0]?.question ?? '';
      default:
        return '';
    }
  }
}
