import {Injectable} from '@angular/core';
import {API} from 'aws-amplify';
import {Item} from '../../model/item';


@Injectable({
  providedIn: 'root'
})

export class ArchiveService {

  private apiName = 'archive_service';
  private path = '/items';

  constructor() {
  }

  public getClosedItems(): Promise<Item[]> {
    return API.get(this.apiName, this.path, {response: true})
      .then(response => {
        if (response.status === 200) {
          return response.data;
        }
        else if (response.status === 204) {
          return null;
        }
      })
      .catch();
  }
}
