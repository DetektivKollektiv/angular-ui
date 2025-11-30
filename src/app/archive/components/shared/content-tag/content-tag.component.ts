import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-tag',
  templateUrl: './content-tag.component.html',
  styleUrls: ['./content-tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'content-tag'
  }
})
export class ContentTagComponent {
  @Input() tag = '';
}
