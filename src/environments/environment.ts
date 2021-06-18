// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: {
    baseUrl: 'https://api.dev.codetekt.org',
  },
  auth: {
    identityPoolId: 'eu-central-1:69722fe9-a444-4aa5-8016-129a273b2fa5',
    userPoolId: 'eu-central-1_edLkAIQVL',
    clientId: '5duuursqtc32rqksh9d00ciplo',
    authDomain: 'auth.dev.codetekt.org',
    redirectSignIn: 'http://localhost:4200/',
    redirectSignOut: 'http://localhost:4200/',
  },
  signalLink: 'https://signal.group/#CjQKIM3ulwlm8OT0_dlVj3GRuZNypumHPahTkJxBCQHtoJSmEhDBzZwFxv4lARp7rG-2vF_p'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
