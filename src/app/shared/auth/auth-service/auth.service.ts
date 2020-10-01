import {Injectable} from '@angular/core';
import {Auth, Hub} from 'aws-amplify';
import {BehaviorSubject} from 'rxjs';
import {AuthState} from '../model/auth-state';
import {map} from 'rxjs/operators';

const initialAuthState: AuthState = {
  isLoggedIn: false,
  username: null,
  id: null,
  email: null,
  idToken: null
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authState = new BehaviorSubject<AuthState>(
    initialAuthState
  );

  /** AuthState as an Observable */
  readonly auth$ = this.authState.asObservable();

  /** Observe the isLoggedIn slice of the auth state */
  readonly isLoggedIn$ = this.auth$.pipe(map(state => state.isLoggedIn));

  constructor() {
    Auth.currentAuthenticatedUser().then(
      (user: any) => this.setUser(user),
      () => this.authState.next(initialAuthState)
    );

    Hub.listen('auth', ({ payload: { event, data } }) => {
      if (event === 'cognitoHostedUI') {
        this.setUser(data);
      }
    });
  }

  public signIn(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      Auth.federatedSignIn().then(() => resolve(true), reject);
    });
  }

  public signOut(global: boolean = false): Promise<boolean> {
    return new Promise((resolve, reject) => {
      Auth.signOut({global}).then(() => resolve(true), reject);
    });
  }

  private setUser(user: any) {
    if (!user) {
      return;
    }

    const {
      username
    } = user;

    this.authState.next({ isLoggedIn: true, id: '', username, email: '', idToken: '' });
  }
}
