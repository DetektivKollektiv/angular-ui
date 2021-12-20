import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ForgotPasswordSubmitComponent} from './forgot-password-submit.component';
import {AuthService} from '../../auth-service/auth.service';
import {MockAuthService} from '../../../../../test/mocks/mock-auth.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MaterialModule} from '../../../material/material.module';

describe('ForgotPasswordSubmitComponent', () => {
  let component: ForgotPasswordSubmitComponent;
  let fixture: ComponentFixture<ForgotPasswordSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [ForgotPasswordSubmitComponent],
      providers: [
        {provide: AuthService, useClass: MockAuthService},
        {provide: MatDialogRef, useValue: {}},
        {
          provide: MAT_DIALOG_DATA, useValue: {
            details: {
              DeliveryMedium: 'SMS' //eslint-disable-line
            }
          }
        }
      ]
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
