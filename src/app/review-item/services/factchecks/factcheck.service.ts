import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import { Factcheck } from '../../model/factcheck';

@Injectable({
  providedIn: 'root'
})
export class FactcheckService {
  private factchecksUrl = '/factchecks';

  constructor() { }

  public getFactcheck(caseId): Promise<Factcheck> {
    return API.get('api', this.factchecksUrl + '/' + caseId, {}).then((value: Factcheck) => {
      return value;
    });
  }
}
