import {Injectable} from '@angular/core';
import {API} from 'aws-amplify';
import {Factcheck} from '../../model/factcheck';

@Injectable({
  providedIn: 'root'
})
export class FactCheckService {
  private factchecksUrl = '/factchecks';

  constructor() {
  }

  public getFactCheck(caseId): Promise<Factcheck> {
    return API.get('ml_service', this.factchecksUrl + '/' + caseId, {})
      .then((value: Factcheck) => {
        return value;
      })
      .catch(() => null);
  }
}
