import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@shared/material/material.module';

import { OpenReviewDialogComponent } from './open-review-dialog.component';

describe('OpenReviewDialogComponent', () => {
  let component: OpenReviewDialogComponent;
  let fixture: ComponentFixture<OpenReviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenReviewDialogComponent],
      imports: [MaterialModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenReviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
