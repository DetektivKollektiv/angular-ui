import { Injectable } from '@angular/core';
import { Item } from '../../model/item';
import { API } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}

  public getOpenItems(): Promise<Item[]> {
    return API.get('review_service', '/items', {
      queryStringParameters: {
        num_items: 5,
      },
    })
      .then((value: Item[]) => {
        return value;
      })
      .catch();
  }

  public getItemTags(itemId: string): Promise<string[]> {
    return API.get('ml_service', `/items/${itemId}/tags`, {})
      .then((response: string[]) => {
        const tagsKey = 'Tags';
        return response[tagsKey];
      })
      .catch((err) => {
        throw new Error(`Could not find item tags: ${err}`);
      });
  }

  public setItemTags(itemId: string, tags: string[]): Promise<string> {
    // const tagsBody = {tags: tags};
    return API.post('ml_service', `/items/${itemId}/tags`, {body: tags, response: true})
      .then((response: string) => {
        return response;
      })
      .catch((err) => {
        throw new Error(`Could not find item tags: ${err}`);
      });
  }
}
