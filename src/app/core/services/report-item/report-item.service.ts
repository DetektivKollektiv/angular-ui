import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { noop, Observable } from 'rxjs';
import { Issue } from '../../../issues/model/issue';
import { IssueService } from '../../../issues/services/issue.service';
import { ReportItemDialogComponent } from '../../dialogs/report-item-dialog/report-item-dialog.component';
import { ReportItemDialogData } from './report-item-dialog-data';

@Injectable({
  providedIn: 'root'
})
export class ReportItemService {
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private issueService: IssueService) {}

  openReportItemDialog(data: ReportItemDialogData): void {
    this.dialog
      .open(ReportItemDialogComponent, {
        maxWidth: '600px',
        width: '90%',
        data
      })
      .afterClosed()
      .subscribe(noop);
  }

  sendReport(data: ReportItemDialogData): Observable<Issue> {
    const { type, itemId, message } = data;
    const issue = {
      item_id: type === 'case' ? itemId : undefined,
      comment_id: type === 'comment' ? itemId : undefined,
      category: 'report',
      message
    } as Issue;
    return this.issueService.submitIssue(issue);
  }
}
