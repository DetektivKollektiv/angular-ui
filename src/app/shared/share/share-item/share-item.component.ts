import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShareItem } from '../model/share-item';

@Component({
  selector: 'app-share-item',
  templateUrl: './share-item.component.html',
  styleUrls: ['./share-item.component.scss']
})
export class ShareItemComponent {
  @Input() item: ShareItem;

  constructor(private snackBar: MatSnackBar) {}

  onClick() {
    if (this.item.type === 'link') {
      navigator.clipboard.writeText(this.item.url);
      this.snackBar.open('Der Link wurde in die Zwischenablage kopiert!', '', { duration: 3000 });
      return;
    }
    window.open(this.item.url, '_blank');
  }
}
