import { Injectable } from '@angular/core';
import { GetItemResponse, Item } from '../../model/item';
import { API } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}

  public async getOpenItems(): Promise<GetItemResponse> {
    try {
      const response = await API.get('review_service', '/items', {
        queryStringParameters: {
          num_items: 5,
        },
        response: true,
      });

      switch (response.status) {
        case 200:
          return response.data;
        default:
          break;
      }

      return response;
    } catch (e) {}
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

  public setItemTags(itemId: string, tagsList: string[]): Promise<string> {
    return API.post('ml_service', `/items/${itemId}/tags`, {
      body: { tags: tagsList },
      response: true,
    })
      .then((response: string) => response)
      .catch((err) => {
        throw new Error(`Could not find item tags: ${err}`);
      });
  }
}
