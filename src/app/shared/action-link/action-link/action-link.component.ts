import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export type ActionLinkTheme = 'light' | 'dark';

@Component({
  selector: 'app-action-link',
  templateUrl: './action-link.component.html',
  styleUrls: ['./action-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'action-link',
    '[class.action-link--light]': 'theme === "light"',
    '[class.action-link--dark]': 'theme === "dark"'
  }
})
export class ActionLinkComponent {
  @Input() text: string = 'Hilfe';
  @Input() icon: string = 'support';
  @Input() iconColor: string = '#6366f1';
  @Input() url: string | null = '/help';
  @Input() target: string = '_blank';
  @Input() theme: ActionLinkTheme = 'light';

  @Output() activated = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent): void {
    this.activated.emit(event);

    if (!this.url) {
      event.preventDefault();
    }
  }
}
