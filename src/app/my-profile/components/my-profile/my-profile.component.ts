import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Item } from 'src/app/model/item';
import { ArchiveState } from 'src/app/archive/state/archive.state';
import { UserService } from 'src/app/core/services/user/user.service';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  @Select(ArchiveState.filteredItems) items$: Observable<Item[]>;
  public items: Item[];
  public user: User;
  public userName: string;
  public userLoaded: boolean = true;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.user$.subscribe((user: User) => {
      if (user) {
        this.userLoaded = true;
      } else {
        this.userLoaded = false;
      }

      this.user = user;
    });

    this.items$.subscribe((items) => {
      this.items = items;
    });
  }

}
