import { TestBed } from '@angular/core/testing';

import { FactCheckService } from './fact-check.service';
import {API} from 'aws-amplify';
import {environment} from '../../../../environments/environment';

describe('FactcheckService', () => {
  let service: FactCheckService;

  beforeEach(() => {
    API.configure({
      endpoints: [
        {
          name: 'api',
          endpoint: environment.api.baseUrl,
          region: 'eu-central-1'
        },
      ]
    });

    TestBed.configureTestingModule({});
    service = TestBed.inject(FactCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
