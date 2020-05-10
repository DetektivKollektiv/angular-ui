import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Item} from 'src/app/detektiv-kollektiv/model/item';

@Component({
  selector: 'app-review-result-dialog',
  templateUrl: './review-result-dialog.component.html',
  styleUrls: ['./review-result-dialog.component.scss']
})
export class ReviewResultDialogComponent {

  constructor(public dialogRef: MatDialogRef<ReviewResultDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Item) {
  }

  close(): void {
    this.dialogRef.close();
  }
}
