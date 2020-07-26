import {Injectable} from '@angular/core';
import {API} from 'aws-amplify';
import {Item} from '../../model/item';


@Injectable({
  providedIn: 'root'
})

export class ArchiveService {

  private apiName = 'api';
  private path = '/items/closed';
  private myInit = {
    headers: {},
    response: true,
  };

  constructor() {
  }

  public getClosedItems(): Promise<Array<Item>> {
    return API.get(this.apiName, this.path, this.myInit).then(response => {
      return response.data;
    });
  }
}
