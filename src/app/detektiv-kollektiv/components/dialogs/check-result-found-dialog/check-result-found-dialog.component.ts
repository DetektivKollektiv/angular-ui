import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Item} from 'src/app/detektiv-kollektiv/model/item';

@Component({
  selector: 'app-check-result-found-dialog',
  templateUrl: './check-result-found-dialog.component.html',
  styleUrls: ['./check-result-found-dialog.component.scss']
})
export class CheckResultFoundDialogComponent {

  constructor(public dialogRef: MatDialogRef<CheckResultFoundDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Item) {
  }

  close(): void {
    this.dialogRef.close();
  }

}
