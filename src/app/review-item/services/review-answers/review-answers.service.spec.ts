import { TestBed } from '@angular/core/testing';

import { ReviewAnswersService } from './review-answers.service';
import {API} from 'aws-amplify';
import {environment} from '../../../../environments/environment';

describe('ReviewAnswersService', () => {
  let service: ReviewAnswersService;

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
    service = TestBed.inject(ReviewAnswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
