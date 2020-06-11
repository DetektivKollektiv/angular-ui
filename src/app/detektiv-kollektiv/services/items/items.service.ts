import {Injectable} from '@angular/core';
import {Item} from '../../model/item';
import {CheckResult} from '../../model/check-result';
import {API} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private itemsUrl = `/items`;
  private checkItemUrl = `${this.itemsUrl}/check`;
  private randomItemUrl = `${this.itemsUrl}/random`;

  constructor() {
  }

  public getItem(): Promise<Item> {
    return API.get('api', this.randomItemUrl, {}).then((item: Item) => {
      return item;
    });
  }

  public getAllItems(): Promise<Item[]> {
    return API.get('api', this.itemsUrl, {}).then((items: Item[]) => {
      return items;
    });
  }

  public checkItem(text: string): Promise<CheckResult> {
    return API.post('api', this.checkItemUrl, {body: text, response: true}).then(value => {
      if (value.status === 200) {
        return {created: false, item: value.data};
      } else if (value.status === 201) {
        console.log(value);
        return {created: true, item: value.data};
      }
    });
  }
}
