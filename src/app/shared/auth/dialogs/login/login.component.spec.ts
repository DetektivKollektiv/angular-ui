import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AuthService} from '../../auth-service/auth.service';
import {MockAuthService} from '../../../../../test/mocks/mock-auth.service';
import {MatDialogRef} from '@angular/material/dialog';
import {MaterialModule} from '../../../material/material.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
      ],
      declarations: [ LoginComponent ],
      providers: [
        {provide: AuthService, useClass: MockAuthService},
        {provide: MatDialogRef, useValue: {}}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
