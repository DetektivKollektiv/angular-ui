import {Injectable} from '@angular/core';
import {API} from 'aws-amplify';
import {User} from '../../model/user';
import {LevelService} from '../level/level.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private levelService: LevelService) {
  }

  public getCurrentUser(): Promise<User> {
    return API.get('api', '/user', {}).then((user: User) => {
      user.levelString = this.levelService.getLevelNameById(user.level);
      return user;
    });
  }
}
