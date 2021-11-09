import { Injectable } from '@angular/core';
import { Review } from '../../model/review';
import { API } from 'aws-amplify';
import { from, Observable } from 'rxjs';

@Injectable()
export class ReviewsService implements IReviewService {
  private apiName = 'review_service';
  private reviewsUrl = '/reviews';

  constructor() {}

  getOpenReview(): Observable<Review> {
    return from(
      API.get(this.apiName, '/review', { response: true })
        .then((response) => {
          if (response.status === 200) {
            return response.data;
          } else if (response.status === 204) {
            return null;
          }
        })
        .catch()
    );
  }

  /**
   * Returns a review based on a given id.
   *
   * @param id - the id of the review to get
   */
  public getReview(id: string): Observable<Review> {
    return from(
      API.get('review_service', `${this.reviewsUrl}/${id}`, {
        response: true
      }).then((response) => {
        switch (response.code) {
          case 200:
            return response.data;
          default:
            break;
        }
      })
    );
  }

  /**
   * Creates a new review for a given item (identified by its id)
   *
   * @param item_id - the id of the item for which to create a review
   */
  public createReview(item_id: string): Observable<Review> {
    return from(
      API.post('review_service', this.reviewsUrl, {
        response: true,
        body: {
          item_id
        }
      }).then((response) => {
        switch (response.status) {
          case 201:
            return response.data;
          default:
            break;
        }
      })
    );
  }

  /**
   * Updates a review
   *
   * @param review - the review to update
   */
  public updateReview(review: Review): Observable<void> {
    return from(
      API.put('review_service', this.reviewsUrl, {
        response: true,
        body: review
      })
    );
  }
}

export interface IReviewService {
  getOpenReview(): Observable<Review>;

  getReview(id: string): Observable<Review>;

  createReview(item_id: string): Observable<Review>;

  updateReview(review: Review): Observable<void>;
}
