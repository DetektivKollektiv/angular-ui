import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReportItemDialogData } from '../../services/report-item/report-item-dialog-data';
import { ReportItemService } from '../../services/report-item/report-item.service';

@Component({
  selector: 'app-report-item',
  templateUrl: './report-item-dialog.component.html',
  styleUrls: ['./report-item-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportItemDialogComponent {
  message: string;

  get type(): string {
    switch (this.data.type) {
      case 'case':
        return 'Fall';
      case 'comment':
        return 'Kommentar';
      default:
        return 'Eintrag';
    }
  }

  constructor(
    private dialogRef: MatDialogRef<ReportItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ReportItemDialogData,
    private reportItemService: ReportItemService,
    private snackBar: MatSnackBar
  ) {}

  sendReport(): void {
    this.reportItemService.sendReport(this.data).subscribe(
      () => {
        this.snackBar.open(
          'Vielen Dank für deine Meldung! Wir prüfen den von dir gemeldeten Inhalt ' +
            'und nehmen ihn offline, falls er gegen unsere Nutzungsbedingungen verstößt.',
          '',
          { duration: 5000 }
        );
        this.dialogRef.close(true);
      },
      () => this.snackBar.open('Es ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.', '', { duration: 5000 })
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}
