import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import { from, Observable, of } from 'rxjs';

import { Item } from 'src/app/model/item';
import { mock_items } from './mock/mock-archive.service';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  private apiName = 'archive_service';
  private path = '/items';

  constructor() {}

  public getClosedItems(): /*Promise*/ Observable<Item[]> {
    /* return from(
      API.get(this.apiName, this.path, { response: true })
        .then((response) => {
          if (response.status === 200) {
            const items = response.data;
            return items;
          } else if (response.status === 204) {
            return null;
          }
        })
        .catch()
    ); */
    return of(mock_items as Item[]);
  }

  public getClosedItem(id): /*Promise*/ Observable<any> {
    const newPath = `${this.path}/${id}`;
    return from(
      API.get(this.apiName, newPath, { response: true })
        .then((response) => {
          if (response.status === 200) {
            const items = response.data;

            return items;
          } else if (response.status === 204) {
            return null;
          }
        })
        .catch()
    );
  }

  public createComment(itemId, text, user): Observable<any> {
    const newPath = `/comments`;
    return from(
      API.post(this.apiName, newPath, { body: { item_id: itemId, comment: text }, response: true })
        // API.post(this.apiName, newPath, { body: {item_id: itemId, comment: text, user: user}, response: true })
        .then((response) => {
          if (response.status === 200) {
            const data = response.data;

            return data;
          } else if (response.status === 204) {
            return null;
          }
        })
        .catch()
    );
  }
}

