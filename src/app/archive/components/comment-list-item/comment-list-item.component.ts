import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/model/comment.interface';
import { ReportItemDialogData } from '../../../core/services/report-item/report-item-dialog-data';
import { ReportItemService } from '../../../core/services/report-item/report-item.service';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss']
})
export class CommentListItemComponent {
  @Input() comment: Comment;

  constructor(private reportItemService: ReportItemService) {}

  onReportComment(): void {
    const data: ReportItemDialogData = { type: 'comment', itemId: this.comment.id, content: this.comment.comment };
    this.reportItemService.openReportItemDialog(data);
  }
}
