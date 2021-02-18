import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {Auth} from 'aws-amplify';
import {environment} from '../../../../environments/environment';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    Auth.configure({
      aws_project_region: 'eu-central-1',
      aws_cognito_identity_pool_id: environment.auth.identityPoolId,
      aws_cognito_region: 'eu-central-1',
      aws_user_pools_id: environment.auth.userPoolId,
      aws_user_pools_web_client_id: environment.auth.clientId,
      oauth: {
        domain: environment.auth.authDomain,
        scope: [
          'phone',
          'email',
          'openid',
          'profile',
          'aws.cognito.signin.user.admin'
        ],
        redirectSignIn: environment.auth.redirectSignIn,
        redirectSignOut: environment.auth.redirectSignOut,
        responseType: 'code'
      },
      federationTarget: 'COGNITO_USER_POOLS'
    });

    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
