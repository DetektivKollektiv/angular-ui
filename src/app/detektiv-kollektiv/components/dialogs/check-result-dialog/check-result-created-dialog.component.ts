import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-check-result-dialog',
  templateUrl: './check-result-created-dialog.component.html',
  styleUrls: ['./check-result-created-dialog.component.scss']
})
export class CheckResultCreatedDialogComponent {

  constructor(public dialogRef: MatDialogRef<CheckResultCreatedDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
