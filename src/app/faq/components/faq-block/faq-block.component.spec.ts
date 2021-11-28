import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBlockComponent } from './faq-block.component';
import { FaqItemComponent } from '../faq-item/faq-item.component';
import { HttpClientModule } from '@angular/common/http';

describe('FaqBlockComponent', () => {
  let component: FaqBlockComponent;
  let fixture: ComponentFixture<FaqBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqBlockComponent, FaqItemComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
