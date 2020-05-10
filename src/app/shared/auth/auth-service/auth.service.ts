import {Injectable} from '@angular/core';
import {Auth, Hub} from 'aws-amplify';
import {BehaviorSubject} from 'rxjs';
import {AuthState} from '../model/auth-state';
import {map} from 'rxjs/operators';

const initialAuthState = {
  isLoggedIn: false,
  username: null,
  id: null,
  email: null
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

    Hub.listen('auth', capsule => console.log(capsule));

    Hub.listen('auth', ({ payload: { event, data, message } }) => {
      if (event === 'signIn') {
        this.setUser(data);
      } else {
        this.authState.next(initialAuthState);
      }
    });
  }

  public signIn(userName: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      Auth.signIn(userName, password).then(() => resolve(true), reject);
    });
  }

  public signOut(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      Auth.signOut({global: true}).then(() => resolve(true), reject);
    });
  }

  public register(userName: string, password: string, email: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      Auth.signUp(userName, password, email).then(() => resolve(true), reject);
    });
  }

  private setUser(user: any) {
    if (!user) {
      return;
    }

    const {
      attributes: {
        sub: id,
        email
      },
      username
    } = user;

    this.authState.next({ isLoggedIn: true, id, username, email });
  }
}
