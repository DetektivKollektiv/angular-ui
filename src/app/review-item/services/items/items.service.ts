import {Injectable} from '@angular/core';
import {Item} from '../../model/item';
import {API} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() {
  }

  public getOpenItems(): Promise<Item[]> {
    return API.get('review_service', '/items', {
      queryStringParameters: {
        num_items: 5
      }
    })
      .then((value: Item[]) => {
        return value;
      })
      .catch();
  }
}
