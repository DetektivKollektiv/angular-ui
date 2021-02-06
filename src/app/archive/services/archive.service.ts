import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import { Item } from '../../model/item';

@Injectable({
  providedIn: 'root',
})
export class ArchiveService {
  private apiName = 'archive_service';
  private path = '/items';

  constructor() {}

  public getClosedItems(): Promise<Item[]> {
    return API.get(this.apiName, this.path, { response: true })
      .then((response) => {
        if (response.status === 200) {
          const items = response.data;
          // TODO: Remove (just for demonstration if closed items have no tags)
          // items[0].tags = ['Corona', 'Trump'];
          // items[1].tags = ['Pandemie'];
          // items[2].tags = ['Trump'];
          return items;
        } else if (response.status === 204) {
          return null;
        }
      })
      .catch();
  }
}
