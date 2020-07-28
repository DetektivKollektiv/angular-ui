import {Injectable} from '@angular/core';
import {API} from 'aws-amplify';
import {Item} from '../../model/item';


@Injectable({
  providedIn: 'root'
})

export class ArchiveService {

  private apiName = 'api';
  private path = '/items/closed';

  constructor() {
  }

  public getClosedItems(): Promise<Item[]> {
    return API.get(this.apiName, this.path, {}).then((response: Item[]) => {
      return response;
    });
  }
}
