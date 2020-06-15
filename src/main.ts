import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import 'hammerjs';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
// import amplify from './aws-exports';

import {Amplify, API} from 'aws-amplify';

// amplify.oauth.redirectSignIn = environment.redirectSignIn;
// amplify.oauth.redirectSignOut = environment.redirectSignOut;

Amplify.configure({
  aws_project_region: 'eu-central-1',
  aws_cognito_identity_pool_id: 'eu-central-1:75a6c653-26fd-48e1-9f17-274db2ca4ae8',
  aws_cognito_region: 'eu-central-1',
  aws_user_pools_id: 'eu-central-1_Gr9WPsz3i',
  aws_user_pools_web_client_id: '4qddbhldc4os0sn5t7p4liv2b3',
  oauth: {
    domain: 'detective-collective-develop.auth.eu-central-1.amazoncognito.com',
    scope: [
      'phone',
      'email',
      'openid',
      'profile',
      'aws.cognito.signin.user.admin'
    ],
    redirectSignIn: environment.redirectSignIn,
    redirectSignOut: environment.redirectSignOut,
    responseType: 'code'
  },
  federationTarget: 'COGNITO_USER_POOLS'
});

API.configure({endpoints: [
    {
      name: 'api',
      endpoint: environment.apiBase,
      region: 'eu-central-1'
    },
  ]});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
