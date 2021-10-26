/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuestionCarouselComponent } from './question-carousel.component';
import { QuestionsSwiperComponent } from 'src/app/review-item/components/questions-swiper/questions-swiper.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SwiperModule } from 'swiper/angular';

describe('QuestionCarouselComponent', () => {
  let component: QuestionCarouselComponent;
  let fixture: ComponentFixture<QuestionCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCarouselComponent, QuestionsSwiperComponent ],
      imports: [
        IvyCarouselModule,
        SwiperModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
