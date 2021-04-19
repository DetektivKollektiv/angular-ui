import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponent } from './components/file/file.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../material/material.module';
import { ResultScoreComponent } from './components/result-score/result-score.component';
import { MobileDialogComponent } from './components/mobile-dialog/mobile-dialog.component';

@NgModule({
  declarations: [FileComponent, ConfirmDialogComponent, ResultScoreComponent, MobileDialogComponent],
  exports: [FileComponent, ResultScoreComponent],
  imports: [CommonModule, MaterialModule],
})
export class HelperModule {}
