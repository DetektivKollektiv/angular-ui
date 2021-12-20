import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import { Factcheck } from '../../../model/factcheck';

@Injectable({
  providedIn: 'root',
})
export class FactCheckService {
  constructor() {}

  public async getFactCheck(caseId: string): Promise<Factcheck> {
    if (!caseId) {
      return null;
    }

    try {
      const value = await API.get(
        'ml_service',
        `/items/${caseId}/factcheck`,
        {}
      );
      return value;
    } catch (e) {
      return null;
    }
  }
}
