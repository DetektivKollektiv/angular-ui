import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-pill-button',
  templateUrl: './icon-pill-button.component.html',
  styleUrls: ['./icon-pill-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconPillButtonComponent {
  @Input() disabled = false;
  @Input() ariaLabel = '';
  @Output() pressed = new EventEmitter<Event>();

  onClick(event: Event): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    this.pressed.emit(event);
  }
}
