import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordSubmitComponent } from './forgot-password-submit.component';

describe('ForgotPasswordSubmitComponent', () => {
  let component: ForgotPasswordSubmitComponent;
  let fixture: ComponentFixture<ForgotPasswordSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
