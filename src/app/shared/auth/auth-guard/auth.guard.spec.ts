import {TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {AuthService} from '../auth-service/auth.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {TranslateModule} from '@ngx-translate/core';
import {PLATFORM_ID} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {MockAuthService} from '../../../../test/mocks/mock-auth.service';

// TODO: Fix test

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        {provide: AuthService, useClass: MockAuthService},
        {provide: PLATFORM_ID, useValue: 'browser'}
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
