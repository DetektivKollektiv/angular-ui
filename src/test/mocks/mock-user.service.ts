import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../../app/core/model/user';

@Injectable({
  providedIn: 'root',
})
export class MockUserService {
  readonly user$ = of({level: 3, name:'testuser'} as User);

  constructor() {}

  public getTopUsers(): Promise<User[]> {
    return new Promise((resolve, reject) => resolve([]));
  }
}
