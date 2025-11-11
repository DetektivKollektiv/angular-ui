import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-text',
  templateUrl: './progress-text.component.html',
  styleUrls: ['./progress-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressTextComponent {
  @Input() current = 0;
  @Input() total = 0;
}
