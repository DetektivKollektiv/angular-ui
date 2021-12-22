import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {AuthService} from '../../../shared/auth/auth-service/auth.service';
import {UserService} from '../../services/user/user.service';
import {UserDeleteReason} from '../../model/user-delete-reason';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.scss']
})
export class DeleteUserDialogComponent implements OnInit {
  deleteReasonFormControl: FormControl;
  otherFormControl: FormControl;

  constructor(public dialogRef: MatDialogRef<DeleteUserDialogComponent>,
              private authService: AuthService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.deleteReasonFormControl = new FormControl();
    this.otherFormControl = new FormControl({value: '', disabled: true});

    this.deleteReasonFormControl.valueChanges.subscribe((value: string) => {
      if (value === '4') {
        this.otherFormControl.enable();
      } else {
        this.otherFormControl.disable();
      }
    });
  }

  delete(): void {
    this.userService.deleteUser({
      reason: this.deleteReasonFormControl.value,
      reasonText: this.otherFormControl.value
    } as UserDeleteReason)
      .then(deleted => {
        this.dialogRef.close(deleted);
      })
      .catch();
  }
}
