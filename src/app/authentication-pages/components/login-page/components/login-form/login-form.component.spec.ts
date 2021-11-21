import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';
import { MaterialModule } from '@shared/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../../../../shared/auth/auth-service/auth.service';
import { MockAuthService } from '../../../../../../test/mocks/mock-auth.service';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
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
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
