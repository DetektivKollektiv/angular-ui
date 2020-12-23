import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from './core/services/user/user.service';
import {User} from './core/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public user: User;

  constructor(private translateService: TranslateService,
              private userService: UserService) {
    this.translateService.use('de-DE');

    this.userService.user$.subscribe(user => {
      this.user = user;
    });
  }
}
