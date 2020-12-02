import {TestBed} from '@angular/core/testing';

import {UserService} from './user.service';
import {AuthService} from '../../../shared/auth/auth-service/auth.service';
import {MockAuthService} from '../../../../test/mocks/mock-auth.service';
import {API} from 'aws-amplify';
import {environment} from '../../../../environments/environment';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    API.configure({
      endpoints: [
        {
          name: 'api',
          endpoint: environment.api.baseUrl,
          region: 'eu-central-1'
        },
      ]
    });

    TestBed.configureTestingModule({
      providers: [{provide: AuthService, useClass: MockAuthService}]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
