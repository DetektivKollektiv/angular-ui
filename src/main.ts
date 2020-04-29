import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify, {Auth} from 'aws-amplify';
import amplify from './aws-exports';

Amplify.configure(amplify);

const oauth = {
  domain: 'detective-collective.auth.eu-central-1.amazoncognito.com',
  scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
  redirectSignIn: 'http://localhost:4200/',
  redirectSignOut: 'http://localhost:4200/',
  responseType: 'code',
};

Auth.configure({oauth});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
