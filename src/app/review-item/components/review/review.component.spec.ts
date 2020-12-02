import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReviewComponent} from './review.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MaterialModule} from '../../../shared/material/material.module';
import {LoaderModule} from '../../../shared/loader/loader.module';
import {HelperModule} from '../../../shared/helper/helper.module';
import {AuthService} from '../../../shared/auth/auth-service/auth.service';
import {MockAuthService} from '../../../../test/mocks/mock-auth.service';
import {UserService} from '../../../core/services/user/user.service';
import {MockUserService} from '../../../../test/mocks/mock-user.service';

describe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewComponent],
      imports: [
        RouterTestingModule,
        MaterialModule,
        LoaderModule,
        HelperModule
      ],
      providers: [
        {provide: AuthService, useClass: MockAuthService},
        {provide: UserService, useClass: MockUserService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
