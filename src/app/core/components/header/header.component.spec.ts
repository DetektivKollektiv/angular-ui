import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TranslateModule} from '@ngx-translate/core';
import {MockAuthService} from '../../../../test/mocks/mock-auth.service';
import {AuthService} from '../../../shared/auth/auth-service/auth.service';
import {MaterialModule} from '../../../shared/material/material.module';
import {UserService} from '../../services/user/user.service';
import {MockUserService} from '../../../../test/mocks/mock-user.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        TranslateModule.forRoot()
      ],
      declarations: [HeaderComponent],
      providers: [
        {provide: AuthService, useClass: MockAuthService},
        {provide: UserService, useClass: MockUserService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
