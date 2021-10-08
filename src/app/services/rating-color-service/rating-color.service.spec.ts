import { TestBed } from '@angular/core/testing';

import { RatingColorService } from './rating-color.service';

describe('RatingColorService', () => {
  let service: RatingColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
