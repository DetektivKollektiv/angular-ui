import { Injectable } from '@angular/core';
import { API, Auth } from 'aws-amplify';
import { User } from '../../model/user';
import { LevelService } from '../level/level.service';
import { BehaviorSubject, of } from 'rxjs';
import { AuthService } from '../../../shared/auth/auth-service/auth.service';
import { UserDeleteReason } from '../../model/user-delete-reason';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serviceBasePath = 'user_service';

  private readonly user = new BehaviorSubject<User>({} as User);

  readonly user$ = this.user.asObservable();

  constructor(
    private levelService: LevelService,
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
    API.get(this.serviceBasePath, '', {})
      .then((user: User) => {
        this.user.next(user);
      })
      .catch();
  }

  public deleteUser(reason: UserDeleteReason): Promise<boolean> {
    return new Promise((resolve, reject) => {
      API.del(this.serviceBasePath, '', {})
        .then(() => resolve(true), reject)
        .catch();
    });
  }

  public getTopUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      API.get(this.serviceBasePath, '/top_users', {})
        .then((users: User[]) => {
          return resolve(users);
        })
        .catch();
    });
  }
}
