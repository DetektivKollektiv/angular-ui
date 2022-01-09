import { TestBed } from '@angular/core/testing';

import { RatingService } from './rating.service';

describe('RatingService', () => {
  let service: RatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test.each([
    { score: 0, expectedColor: 'red' },
    { score: 1, expectedColor: 'red' },
    { score: 33, expectedColor: 'red' },
    { score: 34, expectedColor: 'orange' },
    { score: 66, expectedColor: 'orange' },
    { score: 67, expectedColor: 'light-green' },
    { score: 83, expectedColor: 'light-green' },
    { score: 84, expectedColor: 'green' },
    { score: 100, expectedColor: 'green' },
    { score: null, expectedColor: 'red' }
  ])('should return $expectedColor for score of $score', ({ score, expectedColor }) => {
    expect(service.getColorForScore(score)).toBe(expectedColor);
  });


});
