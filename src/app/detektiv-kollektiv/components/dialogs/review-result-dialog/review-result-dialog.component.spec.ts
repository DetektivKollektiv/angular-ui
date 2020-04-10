import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewResultDialogComponent } from './review-result-dialog.component';

describe('ReviewResultDialogComponent', () => {
  let component: ReviewResultDialogComponent;
  let fixture: ComponentFixture<ReviewResultDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewResultDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
