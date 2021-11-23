import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-user-xp-score',
  templateUrl: './user-xp-score.component.html',
  styleUrls: ['./user-xp-score.component.scss']
})
export class UserXpScoreComponent {
  user$ = this.userService.user$;

  constructor(private userService: UserService) {}
}
