import {Injectable} from '@angular/core';
import {Item} from '../../model/item';
import {API} from 'aws-amplify';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmitItemService {
  private itemSubmissionUrl = '/item-submission';

  constructor(private http: HttpClient) {
  }

  public submitItem(item: Item): Promise<Item> {
    // return new Promise<Item>((resolve, reject) => {
    //   resolve();
    // });
    return API.post('api', this.itemSubmissionUrl, {body: item, response: true}).then((response: Item) => {
      return response;
    });
  }
}
