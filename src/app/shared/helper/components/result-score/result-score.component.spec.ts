import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultScoreComponent } from './result-score.component';

describe('ResultScoreComponent', () => {
  let component: ResultScoreComponent;
  let fixture: ComponentFixture<ResultScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultScoreComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultScoreComponent);
    component = fixture.componentInstance;
    component.score = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
