import {Injectable} from '@angular/core';
import {Case} from '../../model/case';
import {of} from 'rxjs';
import {API} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class CaseService {
  private getCaseUrl = '/open_items_for_user/5';
  private acceptCaseUrl = '/accept_item';

  constructor() {
  }

  public getCase(): Promise<Case[]> {
    return API.get('api', this.getCaseUrl, {}).then((value: Case[]) => {
      return value;
    });
  }

  public acceptCase(item: Case): Promise<boolean> {
    return API.post('api', `${this.acceptCaseUrl}/${item.id}`, {response: true}).then(() => {
      return true;
    });
  }
}
