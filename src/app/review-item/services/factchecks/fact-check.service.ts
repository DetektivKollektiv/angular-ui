import {Injectable} from '@angular/core';
import {API} from 'aws-amplify';
import {Factcheck} from '../../model/factcheck';

@Injectable({
  providedIn: 'root'
})
export class FactCheckService {

  constructor() {
  }

  public getFactCheck(caseId: string): Promise<Factcheck> {
    return API.get('ml_service', `/items/${caseId}/factcheck`, {})
      .then((value: Factcheck) => {
        return value;
      })
      .catch(() => null);
  }
}
