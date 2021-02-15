import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user/user.service';
import {User} from '../../../core/model/user';

type UserWithPosition = User & { position: number};

@Component({
  selector: 'app-high-score-sidebar',
  templateUrl: './high-score-sidebar.component.html',
  styleUrls: ['./high-score-sidebar.component.scss']
})


export class HighScoreSidebarComponent implements OnInit {
  public expanded: boolean;
  public index: number;
  public usersList: UserWithPosition[] =  [];
  private noUsers: boolean;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.expanded = false;

    this.userService.getTopUsers()
      .then((users: User[]) => {
        const usersWithPosition: UserWithPosition[] = users.map((user: User, i: number) => ({
          ...user,
          position: i + 1
        }));

        if (users === null){
          this.noUsers = true;
        } else {
          this.noUsers = false;
          this.usersList = usersWithPosition;
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  expand() {
    if (!this.expanded) {
      this.expanded = true;
    }
  }

  collapse() {
    if (this.expanded) {
      this.expanded = false;
    }
  }
}
