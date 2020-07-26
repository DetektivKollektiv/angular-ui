import {Injectable} from '@angular/core';
import {Item} from '../model/item';
import {API} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class SubmitItemService {
  private itemSubmissionUrl = '/item_submission';

  constructor() {
  }

  public submitItem(item: Item): Promise<Item> {
    return API.post('api', this.itemSubmissionUrl, {body: item, response: true}).then((response: Item) => {
      return response;
    });
  }
}
