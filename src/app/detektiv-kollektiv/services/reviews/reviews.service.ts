import {Injectable} from '@angular/core';
import {Review} from '../../model/review';
import {Item} from '../../model/item';
import {API} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  private reviewsUrl = '/reviews';

  constructor() {
  }

  public reviewItem(review: Review): Promise<Item> {
    return  API.post('api', this.reviewsUrl, {body: review}).then((value: Item) => {
      return value;
    });
  }
}
