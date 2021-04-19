import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './core/services/user/user.service';
import { User } from './core/model/user';
import {MatDialog} from '@angular/material/dialog';
import { MobileDialogComponent } from './shared/helper/components/mobile-dialog/mobile-dialog.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public user: User;

  constructor(
    private translateService: TranslateService,
    private userService: UserService,
    public dialog: MatDialog
  ) {
    this.translateService.use('de-DE');

    this.userService.user$.subscribe((user) => {
      this.user = user;
    });

    if(window.innerWidth <= 1000){
      this.dialog.open(MobileDialogComponent, {
        position: {
          top: '50px'
        },
        minWidth: '150vw',
        maxWidth: '175vw'
      });
    }
  }
}
