import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import {AuthService} from '../../auth-service/auth.service';
import {MockAuthService} from '../../../../../test/mocks/mock-auth.service';
import {MatDialogRef} from '@angular/material/dialog';
import {MaterialModule} from '../../../material/material.module';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
      ],
      declarations: [ SignupComponent ],
      providers: [
        {provide: AuthService, useClass: MockAuthService},
        {provide: MatDialogRef, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
