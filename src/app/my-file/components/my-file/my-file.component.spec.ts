import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFileComponent } from './my-file.component';
import { MaterialModule } from '@shared/material/material.module';
import { HelperModule } from '@shared/helper/helper.module';
import { UserService } from '../../../core/services/user/user.service';
import { MockUserService } from '../../../../test/mocks/mock-user.service';
import { AuthService } from 'src/app/shared/auth/auth-service/auth.service';
import { MockAuthService } from 'src/test/mocks/mock-auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog } from '@angular/material/dialog';

describe('MyFileComponent', () => {
  let component: MyFileComponent;
  let fixture: ComponentFixture<MyFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyFileComponent],
      imports: [MaterialModule, HelperModule, RouterTestingModule],
      providers: [
        { provide: UserService, useClass: MockUserService },
        { provide: AuthService, useClass: MockAuthService },
        { provide: MatDialog, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
