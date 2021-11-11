import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBlockComponent } from './faq-block.component';

describe('FaqBlockComponent', () => {
  let component: FaqBlockComponent;
  let fixture: ComponentFixture<FaqBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqBlockComponent ]
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
