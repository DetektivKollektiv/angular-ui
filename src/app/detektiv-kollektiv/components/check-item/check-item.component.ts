import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemsService } from '../../services/items.service';
import { CheckResult } from '../../model/check-result';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CheckResultCreatedDialogComponent } from '../dialogs/check-result-dialog/check-result-dialog.component';
import { CheckResultFoundDialogComponent } from '../dialogs/check-result-found-dialog/check-result-found-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-item',
  templateUrl: './check-item.component.html',
  styleUrls: ['./check-item.component.scss']
})
export class CheckItemComponent {
  form: FormGroup = new FormGroup({});

  constructor(
    private resultDialog: MatDialog,
    private itemsService: ItemsService,
    fb: FormBuilder,
    private router: Router) {

    this.form = fb.group({
      details: ['', [Validators.required]],
    })
  }

  submit(){

    this.itemsService.checkItem(this.form.value.details).subscribe(
      (result: CheckResult) => {

        let dialogRef: MatDialogRef<CheckResultCreatedDialogComponent> | MatDialogRef<CheckResultFoundDialogComponent>;

        if(result.created || false) {
          dialogRef = this.resultDialog.open(CheckResultCreatedDialogComponent, {
            width: '500px'
          })
        } else {
          dialogRef = this.resultDialog.open(CheckResultFoundDialogComponent, {
            width: '500px',
            data: result.item
          })
        }

        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['/dashboard']);
        });
      }
    )
  }
}
