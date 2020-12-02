import { TestBed } from '@angular/core/testing';

import { ReviewAnswersService } from './review-answers.service';

describe('ReviewAnswersService', () => {
  let service: ReviewAnswersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewAnswersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
