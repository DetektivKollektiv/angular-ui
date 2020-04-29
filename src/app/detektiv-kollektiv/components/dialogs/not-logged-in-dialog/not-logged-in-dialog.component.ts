import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-not-logged-in-dialog',
  templateUrl: './not-logged-in-dialog.component.html',
  styleUrls: ['./not-logged-in-dialog.component.scss']
})
export class NotLoggedInDialogComponent {

  constructor(private router: Router,
              private dialogRef: MatDialogRef<NotLoggedInDialogComponent>) {
  }

  login() {
    this.router.navigate(['/login']).then(() =>
      this.dialogRef.close()
    );
  }

  register() {
    this.router.navigate(['/signup']).then(() =>
      this.dialogRef.close()
    );
  }
}
