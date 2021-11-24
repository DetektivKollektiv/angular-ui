import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { User } from '../../../core/model/user';
import { DeleteUserDialogComponent } from '../../../core/dialogs/delete-user-dialog/delete-user-dialog.component';
import { Globals } from '@shared/helper/globals/globals';
import { AuthService } from '@shared/auth/auth-service/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-file',
  templateUrl: './my-file.component.html',
  styleUrls: ['./my-file.component.scss']
})
export class MyFileComponent implements OnInit {
  public user: User;

  constructor(private userService: UserService, private authService: AuthService, private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((value) => {
      if (value) {
        this.user = value;

        // Safari timestamp fix
        // TODO: Remove when format is adapted in API
        this.user.sign_up_timestamp = this.user.sign_up_timestamp.replace(/\s/g, 'T');
      }
    });
  }

  deleteUser(): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, Globals.dialogData);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.authService
          .signOut(true)
          .then(() => this.router.navigate(['/']))
          .catch();
      }
    });
  }
}
