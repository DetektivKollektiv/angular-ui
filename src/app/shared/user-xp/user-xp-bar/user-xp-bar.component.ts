import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-user-xp-bar',
  templateUrl: './user-xp-bar.component.html',
  styleUrls: ['./user-xp-bar.component.scss']
})
export class UserXpBarComponent {
  user$ = this.userService.user$;

  constructor(private userService: UserService) {}
}
