import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { User } from '../../../core/model/user';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-my-file',
  templateUrl: './my-file.component.html',
  styleUrls: ['./my-file.component.scss']
})
export class MyFileComponent implements OnInit {
  public user: User;
  public signInDate: string;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.user$.subscribe(value => {
      if (value) {
        this.user = value;
        this.signInDate = formatDate(this.user.sign_up_timestamp, 'dd.MM.yyyy', 'en-US');
      }
    });
  }

}
