import { TestBed } from '@angular/core/testing';

import { ArchiveService } from './archive.service';
import {API} from 'aws-amplify';
import {environment} from '../../../environments/environment';

describe('ArchiveService', () => {
  let service: ArchiveService;

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
    service = TestBed.inject(ArchiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
