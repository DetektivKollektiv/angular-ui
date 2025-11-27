import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-review-cta-button',
  templateUrl: './review-cta-button.component.html',
  styleUrls: ['./review-cta-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewCtaButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Output() pressed = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent): void {
    if (this.disabled) {
      event.preventDefault();
      return;
    }

    this.pressed.emit(event);
  }
}
