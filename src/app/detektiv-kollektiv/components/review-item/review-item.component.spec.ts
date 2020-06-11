import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewItemComponent } from './review-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ItemsService} from '../../services/items/items.service';
import {ReviewsService} from '../../services/reviews/reviews.service';
import {FormBuilder} from '@angular/forms';
import {AuthModule} from '../../../shared/auth/auth.module';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {TranslateModule} from '@ngx-translate/core';
import {MatListModule} from '@angular/material/list';

describe('ReviewItemComponent', () => {
  let component: ReviewItemComponent;
  let fixture: ComponentFixture<ReviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatListModule,
        AuthModule,
        LoaderModule,
        TranslateModule.forRoot()
      ],
      declarations: [ ReviewItemComponent ],
      providers: [
        ItemsService,
        ReviewsService,
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
