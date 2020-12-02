import {TestBed} from '@angular/core/testing';

import {SubmitItemService} from './submit-item.service';
import {environment} from '../../../environments/environment';
import {API} from 'aws-amplify';

describe('SubmitItemService', () => {
  let service: SubmitItemService;

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
    service = TestBed.inject(SubmitItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
