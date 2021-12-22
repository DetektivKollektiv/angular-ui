import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import { ItemType } from '../../model/item-type';

@Injectable({
  providedIn: 'root'
})
export class ItemTypesService {
  itemTypesUrl = '/itemTypes';

  constructor() { }

  public getItemTypes(): Promise<ItemType[]> {
    return API.get('submission_service', this.itemTypesUrl, {})
      .then((response: ItemType[]) => response)
      .catch();
  }
}
