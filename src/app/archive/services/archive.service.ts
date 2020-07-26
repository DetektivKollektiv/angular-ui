import {Injectable} from '@angular/core';
import {Item} from '../../model/item';
import { Observable } from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {API} from 'aws-amplify';


@Injectable({
  providedIn: 'root'
})

export class ArchiveService {

  constructor() {
  }

  private apiName = 'api';
  private path = '/items/closed';
  private myInit = {
    headers: {},
    response: true,
  };

  public getClosedItems(): Promise<Array<Item>> {
    return API.get(this.apiName, this.path, this.myInit).then((response: Array<Item>) => {
      return response;
    });
  }

}
