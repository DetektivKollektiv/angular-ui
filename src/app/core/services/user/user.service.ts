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
        this.user.next({} as User);
      }
    });
  }

  public updateUser(): void {
    API.get('api', '/user', {}).then((user: User) => {
      user.levelString = this.levelService.getLevelNameById(user.level);
      this.user.next(user);
    });
  }

  deleteUser(reason: UserDeleteReason): Promise<boolean> {
    return of(true).toPromise();

    return new Promise((resolve, reject) => {
      API.del('api', '/user', {}).then(() => resolve(true), reject);
    });
  }
}
