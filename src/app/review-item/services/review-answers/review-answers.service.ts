import {Injectable} from '@angular/core';
import {API} from 'aws-amplify';
import {ReviewAnswer} from '../../model/review-answer';

@Injectable({
  providedIn: 'root'
})
export class ReviewAnswersService {

  private reviewAnswersUrl = '/review_answers';

  constructor() {
  }

  public createReviewAnswer(answer: ReviewAnswer): Promise<ReviewAnswer> {
    const init = {
      body: answer,
      response: true
    };

    return API.post('review_service', this.reviewAnswersUrl, init)
      .then(value => {
        return value.data;
      })
      .catch(reason => {
        return null;
      });
  }
}
