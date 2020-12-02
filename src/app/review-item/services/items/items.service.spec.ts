import { TestBed } from '@angular/core/testing';

import { ItemsService } from './items.service';
import {API} from 'aws-amplify';
import {environment} from '../../../../environments/environment';

describe('CaseService', () => {
  let service: ItemsService;

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
    service = TestBed.inject(ItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
