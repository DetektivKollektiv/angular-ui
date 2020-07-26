import {Injectable} from '@angular/core';
import {Review} from '../../model/review';
import {API} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private submitReviewUrl = '/submit_review';

  constructor() {
  }

  public submitReview(review: Review): Promise<boolean> {
    return API.post('api', this.submitReviewUrl, {body: review, response: true}).then(() => {
      return true;
    });
  }
}
