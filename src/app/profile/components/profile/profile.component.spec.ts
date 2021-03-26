import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { UserService } from '../../../core/services/user/user.service';
import { MockUserService } from '../../../../test/mocks/mock-user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MockAuthService } from '../../../../test/mocks/mock-auth.service';
import { AuthService } from '../../../shared/auth/auth-service/auth.service';
import { ProfilePictureComponent } from '../profile-picture/profile-picture.component';
import { FormsModule } from '@angular/forms';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent, ProfilePictureComponent],
      imports: [MaterialModule, RouterTestingModule, FormsModule],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: UserService, useClass: MockUserService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
