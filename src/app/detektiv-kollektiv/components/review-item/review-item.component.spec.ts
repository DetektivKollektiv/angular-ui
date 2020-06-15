import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReviewItemComponent} from './review-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ItemsService} from '../../services/items/items.service';
import {ReviewsService} from '../../services/reviews/reviews.service';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {TranslateModule} from '@ngx-translate/core';
import {MatListModule} from '@angular/material/list';
import {MockItemsService} from '../../../../test/mocks/mock-items.service';
import {MockReviewService} from '../../../../test/mocks/mock-review.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('ReviewItemComponent', () => {
  let component: ReviewItemComponent;
  let fixture: ComponentFixture<ReviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatListModule,
        LoaderModule,
        TranslateModule.forRoot()
      ],
      declarations: [ReviewItemComponent],
      providers: [
        {provide: ReviewsService, useClass: MockReviewService},
        {provide: ItemsService, useClass: MockItemsService},
        FormBuilder
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
