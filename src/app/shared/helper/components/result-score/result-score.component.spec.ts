import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultScoreComponent } from './result-score.component';
import { expect, test } from '@jest/globals';

describe('ResultScoreComponent', () => {
  let component: ResultScoreComponent;
  let element: HTMLElement;
  let fixture: ComponentFixture<ResultScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultScoreComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultScoreComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  test('should create', () => {
    component.score = 1;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  test.each([
    [1, 'nicht vertrauenswürdig', 'rating-1'],
    [1.9, 'nicht vertrauenswürdig', 'rating-1'],
    [2, 'eher nicht vertrauenswürdig', 'rating-2'],
    [2.0, 'eher nicht vertrauenswürdig', 'rating-2'],
    [2.01, 'eher nicht vertrauenswürdig', 'rating-2'],
    [2.99, 'eher nicht vertrauenswürdig', 'rating-2'],
    [3.0, 'eher vertrauenswürdig', 'rating-3'],
    [3.2, 'eher vertrauenswürdig', 'rating-3'],
    [3.39, 'eher vertrauenswürdig', 'rating-3'],
    [3.4, 'eher vertrauenswürdig', 'rating-3'],
    [3.5, 'vertrauenswürdig', 'rating-4'],
    [4, 'vertrauenswürdig', 'rating-4'],
  ])(
    '%#: %d should have text %s and class %s',
    (score: number, title: string, cssClass: string) => {
      component.score = score;
      fixture.detectChanges();

      expect(element.querySelector('.score').classList.contains(cssClass)).toBe(
        true
      );

      expect(component.title).toEqual(title);

      expect(element.querySelector('.title').textContent).toContain(title);
    }
  );
});
