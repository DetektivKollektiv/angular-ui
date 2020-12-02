import {Injectable} from '@angular/core';
import {Item} from '../../model/item';
import {API} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private getCaseUrl = '/open_items_for_user/5';

  constructor() {
  }

  public getOpenItems(): Promise<Item[]> {
    return API.get('api', this.getCaseUrl, {}).then((value: Item[]) => {
      return value;
    });
  }
}
