import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '@shared/auth/auth-service/auth.service';
import { DeleteUserDialogComponent } from '../../../core/dialogs/delete-user-dialog/delete-user-dialog.component';
import { UserService } from '../../../core/services/user/user.service';
import { Globals } from '@shared/helper/globals/globals';
import { BreadcrumbLink } from '@shared/breadcrumb/model/breadcrumb-link.interface';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  user$ = this.userService.user$;
  authState$ = this.authService.auth$;

  page = 1;

  breadcrumbLinks: BreadcrumbLink[] = [{label: 'Dashboard', homelink: true}];

  constructor(private userService: UserService, private authService: AuthService, private router: Router, private dialog: MatDialog) {}

  deleteAccount(): void {
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
