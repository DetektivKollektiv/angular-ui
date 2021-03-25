import { Injectable } from '@angular/core';
import { API, Auth } from 'aws-amplify';
import { User } from '../../model/user';
import { LevelService } from '../level/level.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AuthService } from '../../../shared/auth/auth-service/auth.service';
import { UserDeleteReason } from '../../model/user-delete-reason';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public readonly user$: Observable<User>;
  private readonly user: BehaviorSubject<User>;

  private serviceBasePath = 'user_service';

  constructor(
    private levelService: LevelService,
    private authService: AuthService
  ) {
    this.user = new BehaviorSubject<User>({} as User);
    this.user$ = this.user.asObservable();

    this.authService.isLoggedIn$.subscribe((value) => {
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
    return new Promise((resolve, reject) =>
      API.get(this.serviceBasePath, '/top_users', {})
        .then((users: User[]) => resolve(users))
        .catch()
    );
  }
}
