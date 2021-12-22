import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteUserDialogComponent} from './delete-user-dialog.component';
import {MatDialogRef} from '@angular/material/dialog';
import {MaterialModule} from '@shared/material/material.module';
import {AuthService} from '@shared/auth/auth-service/auth.service';
import {MockAuthService} from '../../../../test/mocks/mock-auth.service';
import {UserService} from '../../services/user/user.service';
import {MockUserService} from '../../../../test/mocks/mock-user.service';

describe('DeleteUserDialogComponent', () => {
  let component: DeleteUserDialogComponent;
  let fixture: ComponentFixture<DeleteUserDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [DeleteUserDialogComponent],
      providers: [
        {provide: AuthService, useClass: MockAuthService},
        {provide: UserService, useClass: MockUserService},
        {provide: MatDialogRef, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
