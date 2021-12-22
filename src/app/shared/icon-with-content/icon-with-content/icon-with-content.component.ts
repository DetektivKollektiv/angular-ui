import { Component, Directive, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Directive({
  selector: '[appIconWithContentHeader]'
})
export class IconWithContentHeaderDirective {}

@Component({
  selector: 'app-icon-with-content',
  templateUrl: './icon-with-content.component.html',
  styleUrls: ['./icon-with-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IconWithContentComponent {
  @Input() color = 'neon-blue';
  @Input() icon: string;

  @HostBinding('class') get styleClass() {
    return ['icon-with-content', 'icon-with-content--' + this.color];
  }
}
