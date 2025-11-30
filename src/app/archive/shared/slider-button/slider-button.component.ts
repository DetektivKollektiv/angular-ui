import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

type SliderButtonType = 'back' | 'previous';

@Component({
  selector: 'app-slider-button',
  templateUrl: './slider-button.component.html',
  styleUrls: ['./slider-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderButtonComponent {
  @Input() type: SliderButtonType = 'previous';
  @Input() disabled = false;

  @Output() buttonClick = new EventEmitter<void>();

  @HostBinding('class') hostClass = 'slider-button';

  get icon(): string {
    return this.type === 'back' ? 'chevron_left' : 'chevron_right';
  }

  handleClick(event: MouseEvent): void {
    event.stopPropagation();
    this.buttonClick.emit();
  }
}
