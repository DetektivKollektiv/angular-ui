import {Injectable} from '@angular/core';
import {Item} from '../../model/item';
import {API} from 'aws-amplify';


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
    return API.get(this.apiName, this.path, this.myInit).then((response: Array<Item>) => {
      return response;
    });
  }

}
