import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockAuthService {

  readonly auth$ = of({
    isLoggedIn: false,
    username: null,
    id: null,
    email: null,
    idToken: null
  });

  readonly isLoggedIn$ = of(true);

  constructor() {
  }
}
