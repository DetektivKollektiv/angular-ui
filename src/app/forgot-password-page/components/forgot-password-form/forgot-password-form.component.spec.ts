import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotPasswordFormComponent } from './forgot-password-form.component';
import { MaterialModule } from '@shared/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../../shared/auth/auth-service/auth.service';
import { MockAuthService } from '../../../../test/mocks/mock-auth.service';

describe('ForgotPasswordFormComponent', () => {
  let component: ForgotPasswordFormComponent;
  let fixture: ComponentFixture<ForgotPasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordFormComponent ],
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        { provide: AuthService, useClass: MockAuthService }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
