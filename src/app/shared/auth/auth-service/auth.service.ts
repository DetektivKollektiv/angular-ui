import {Injectable} from '@angular/core';
import {Auth, Hub} from 'aws-amplify';
import {BehaviorSubject} from 'rxjs';
import {AuthState} from '../model/auth-state';
import {map} from 'rxjs/operators';
import {OperationResult} from '../../helper/model/operation-result';

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

    // Hub.listen('auth', ({payload: {event, data}}) => {
    //   if (event === 'cognitoHostedUI') {
    //     this.setUser(data);
    //   }
    // });
  }

  public signUp(username: string, password: string, email: string): Promise<OperationResult> {
    return new Promise<OperationResult>((resolve, reject) => {
      Auth.signUp({username, password, attributes: {email}})
        .then(value => {
          console.log(value);
          resolve({
            success: true,
            message: '',
            payload: value
          });
        })
        .catch(reason => {
          console.log(reason);
          reject({
            success: false,
            message: 'Error signing up',
            payload: reason
          });
        });
    });
  }

  public confirmSignUp(username: string, code: string): Promise<OperationResult> {
    return new Promise<OperationResult>((resolve, reject) => {
      Auth.confirmSignUp(username, code)
        .then(value => {
          resolve({
            success: true,
            message: '',
            payload: value
          });
        })
        .catch(reason => {
          reject({
            success: false,
            message: 'Error confirming sign in',
            payload: reason
          });
        })
        .finally();
    });
  }

  public resendSignUp(username: string): Promise<OperationResult> {
    return new Promise<OperationResult>((resolve, reject) => {
      Auth.resendSignUp(username)
        .then(value => {
          resolve({
            success: true,
            message: 'Successfully resent confirmation',
            payload: value
          });
        })
        .catch(reason => {
          reject({
            success: false,
            message: 'Error sending confirmation',
            payload: reason
          });
        });
    });
  }

  public signIn(username: string, password: string): Promise<OperationResult> {
    return new Promise((resolve, reject) => {
      Auth.signIn(username, password)
        .then(value => {
          this.setUser(value);
          resolve({
            success: true,
            message: 'Successfully signed in',
            payload: value
          });
        })
        .catch(reason => {
          reject({
            success: false,
            message: 'Error signing in',
            payload: reason
          });
        });
    });
  }

  public signOut(global: boolean = false): Promise<boolean> {
    return new Promise((resolve, reject) => {
      Auth.signOut({global})
        .then(() => {
          this.authState.next(initialAuthState);
          resolve(true);
        })
        .catch(() => reject());
    });
  }

  public changePassword(oldPassword: string, newPassword: string) {
    Auth.currentAuthenticatedUser()
      .then(user => {
          Auth.changePassword(user, oldPassword, newPassword)
            .then()
            .catch()
            .finally();
        }
      )
      .catch()
      .finally();
  }

  public forgotPassword(username: string): Promise<OperationResult> {
    return new Promise<OperationResult>((resolve, reject) => {
      Auth.forgotPassword(username)
        .then(value => {
            console.log(value);
            resolve({
              success: true,
              message: 'Sent reset code',
              payload: value
            });
          }
        )
        .catch(reason => {
            console.log(reason);
            reject({
              success: false,
              message: 'Error sending forgot password code',
              payload: reason
            });
          }
        );
    });
  }

  public forgotPasswordSubmit(username: string, code: string, newPassword: string): Promise<OperationResult> {
    return new Promise<OperationResult>((resolve, reject) => {
      Auth.forgotPasswordSubmit(username, code, newPassword)
        .then(value => {
          resolve({
            success: true,
            message: 'Finished forgot password',
            payload: value
          });
        })
        .catch(reason => {
          reject({
            success: false,
            message: 'Error finishing forgot password',
            payload: reason
          });
        });
    });
  }


  private setUser(user: any) {
    if (!user) {
      return;
    }

    const {
      username
    } = user;

    this.authState.next({isLoggedIn: true, id: '', username, email: '', idToken: ''});
  }
}
