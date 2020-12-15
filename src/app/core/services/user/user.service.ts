import {Injectable} from '@angular/core';
import {API, Auth} from 'aws-amplify';
import {User} from '../../model/user';
import {LevelService} from '../level/level.service';
import {BehaviorSubject, of} from 'rxjs';
import {AuthService} from '../../../shared/auth/auth-service/auth.service';
import {UserDeleteReason} from '../../model/user-delete-reason';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly user = new BehaviorSubject<User>({} as User);

  readonly user$ = this.user.asObservable();

  constructor(private levelService: LevelService,
              private authService: AuthService) {
    this.authService.isLoggedIn$.subscribe(value => {

      if (value) {
        this.updateUser();
      } else {
        this.user.next(null);
      }
    });
  }

  public updateUser(): void {
    API.get('user_service', '', {})
      .then((user: User) => {
        this.user.next(user);
      })
      .catch();
  }

  public deleteUser(reason: UserDeleteReason): Promise<boolean> {
    return new Promise((resolve, reject) => {
      API.del('user_service', '', {})
        .then(() => resolve(true), reject)
        .catch();
    });
  }
}
