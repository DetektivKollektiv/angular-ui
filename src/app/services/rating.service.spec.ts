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
    { score: 0.6, expectedColor: 'red' },
    { score: 1.32, expectedColor: 'red' },
    { score: 1.36, expectedColor: 'orange' },
    { score: 2.64, expectedColor: 'orange' },
    { score: 2.68, expectedColor: 'light-green' },
    { score: 3.32, expectedColor: 'light-green' },
    { score: 3.36, expectedColor: 'green' },
    { score: 4, expectedColor: 'green' },
    { score: null, expectedColor: 'red' }
  ])('should return $expectedColor for score of $score', ({ score, expectedColor }) => {
    expect(service.getColorForScore(score)).toBe(expectedColor);
  });

  test.each([
    { result: 0, expectedScore: 0 },
    { result: 1, expectedScore: 25 },
    { result: 1.5, expectedScore: 38 },
    { result: 3.33, expectedScore: 83 }
  ])('should convert result $result to $expectedScore', ({ result, expectedScore }) => {
    expect(service.convertResultScoreToScore(result)).toBe(expectedScore);
  });
});
