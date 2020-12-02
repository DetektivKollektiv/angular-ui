import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {User} from '../../app/core/model/user';

@Injectable({
  providedIn: 'root'
})
export class MockUserService {

  readonly user$ = of({

  } as User);

  constructor() {
  }
}
