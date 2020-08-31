import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {AuthService} from '../../../shared/auth/auth-service/auth.service';
import {MockAuthService} from '../../../../test/mocks/mock-auth.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: AuthService, useClass: MockAuthService}]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
