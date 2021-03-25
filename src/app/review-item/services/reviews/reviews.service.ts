import {Injectable} from '@angular/core';
import {Review} from '../../model/review';
import {API} from 'aws-amplify';
import {Item} from '../../model/item';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private submitReviewUrl = '/submit_review';
  private createReviewUrl = '/reviews';

  constructor() {
  }

  public submitReview(review: Review): Promise<boolean> {
    return API.post('review_service', this.submitReviewUrl, {body: review, response: true})
      .then(() => true)
      .catch();
  }

  public createReview(item: Item): Promise<Review> {
    return API.post('review_service', `${this.createReviewUrl}`, {
      response: true,
      body: {},
      queryStringParameters: {
        item_id: item.id
      }
    })
      .then(review => review.data)
      .catch();
  }
}
