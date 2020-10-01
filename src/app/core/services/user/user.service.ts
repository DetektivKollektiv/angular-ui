import {Injectable} from '@angular/core';
import {API} from 'aws-amplify';
import {User} from '../../model/user';
import {LevelService} from '../level/level.service';
import {BehaviorSubject} from 'rxjs';
import {AuthService} from '../../../shared/auth/auth-service/auth.service';

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
    API.get('api', '/user', {})
      .then((user: User) => {
        this.user.next(user);
      })
      .catch(reason => console.log(reason));
  }
}
