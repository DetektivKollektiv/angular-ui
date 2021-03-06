import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { User } from '../../../core/model/user';


@Component({
  selector: 'app-high-score-sidebar',
  templateUrl: './high-score-sidebar.component.html',
  styleUrls: ['./high-score-sidebar.component.scss']
})


export class HighScoreSidebarComponent implements OnInit {
  public expanded: boolean;
  public index: number;
  public userList: User[] = [];
  private noUsers: boolean;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.expanded = false;

    this.userService.getTopUsers()
      .then((users: User[]) => {
        if (users === null) {
          this.noUsers = true;
        } else {
          this.noUsers = false;
          this.userList = users;
        }
      })
      .catch(err => {
        console.error(err);
      });
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
