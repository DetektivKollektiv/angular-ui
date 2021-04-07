import { Injectable } from '@angular/core';
import { Review } from '../../model/review';
import { API } from 'aws-amplify';

@Injectable()
export class ReviewsService implements IReviewService {
  private reviewsUrl = '/reviews';

  constructor() {}

  /**
   * Returns a review based on a given id.
   *
   * @param id - the id of the review to get
   */
  public async getReview(id: string): Promise<Review> {
    try {
      const response = await API.get(
        'review_service',
        `${this.reviewsUrl}/${id}`,
        {
          response: true,
        }
      );

      switch (response.code) {
        case 200:
          return response.data;
        default:
          break;
      }
    } catch (error) {
    } finally {
    }
  }

  /**
   * Creates a new review for a given item (identified by its id)
   *
   * @param item_id - the id of the item for which to create a review
   */
  public async createReview(item_id: string): Promise<Review> {
    try {
      const response = await API.post('review_service', this.reviewsUrl, {
        response: true,
        body: {
          item_id,
        },
      });

      switch (response.status) {
        case 201:
          return response.data;
        default:
          break;
      }
    } catch (error) {
    } finally {
    }
  }

  /**
   * Updates a review
   *
   * @param review - the review to update
   */
  public async updateReview(review: Review): Promise<void> {
    try {
      const response = await API.put('review_service', this.reviewsUrl, {
        response: true,
        body: review,
      });
    } catch (error) {
    } finally {
    }
  }
}

export interface IReviewService {
  getReview(id: string): Promise<Review>;

  createReview(item_id: string): Promise<Review>;

  updateReview(review: Review): Promise<void>;
}
