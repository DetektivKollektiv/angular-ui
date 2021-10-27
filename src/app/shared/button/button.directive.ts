import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {
  @Input() color = 'neon-blue';
  @Input() mode: 'default' | 'reject' = 'default';

  @HostBinding('class') get colorClass() {
    return ['button', this.mode === 'reject' ? 'button--reject' : `button--${this.color}`];
  }
  constructor() {}
}
