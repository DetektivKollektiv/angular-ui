import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appButton]'
})
export class ButtonDirective {
  @Input() color = 'button--neon-blue';

  @HostBinding('class') get colorClass() {
    return ['button', this.color];
  }
  constructor() {}
}
