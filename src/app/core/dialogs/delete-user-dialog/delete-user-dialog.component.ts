import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-delete-user-dialog',
  templateUrl: './delete-user-dialog.component.html',
  styleUrls: ['./delete-user-dialog.component.scss']
})
export class DeleteUserDialogComponent implements OnInit {
  deleteReason: number;
  otherFormControl: FormControl;

  constructor(public dialogRef: MatDialogRef<DeleteUserDialogComponent>) {
  }

  ngOnInit(): void {
    this.otherFormControl = new FormControl({value: '', disabled: this.deleteReason !== 4});
  }
}
