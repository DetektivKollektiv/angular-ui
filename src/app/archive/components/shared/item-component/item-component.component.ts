import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'item-component'
  }
})
export class ItemComponent {
  @Input() tag = '';
}

