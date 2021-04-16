import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Amplify, API } from 'aws-amplify';

const auth = {
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
      'aws.cognito.signin.user.admin',
    ],
    redirectSignIn: environment.auth.redirectSignIn,
    redirectSignOut: environment.auth.redirectSignOut,
    responseType: 'code',
  },
  federationTarget: 'COGNITO_USER_POOLS',
};

Amplify.configure(auth);

const api = {
  endpoints: [
    {
      name: 'archive_service',
      endpoint: `${environment.api.baseUrl}/archive_service`,
      region: 'eu-central-1',
    },
    {
      name: 'ml_service',
      endpoint: `${environment.api.baseUrl}/ml_service`,
      region: 'eu-central-1',
    },
    {
      name: 'review_service',
      endpoint: `${environment.api.baseUrl}/review_service`,
      region: 'eu-central-1',
    },
    {
      name: 'submission_service',
      endpoint: `${environment.api.baseUrl}/submission_service`,
      region: 'eu-central-1',
    },
    {
      name: 'user_service',
      endpoint: `${environment.api.baseUrl}/user_service`,
      region: 'eu-central-1',
    },
    {
      name: 'issue_service',
      endpoint: `${environment.api.baseUrl}/issue_service`,
      region: 'eu-central-1',
    },
  ],
};

API.configure(api);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
