import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Factcheck } from '../../../model/factcheck';

@Component({
  selector: 'app-watson-card',
  templateUrl: './watson-card.component.html',
  styleUrls: ['./watson-card.component.scss']
})
export class WatsonCardComponent {
  @Input() factCheck: Factcheck | null;
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();
}
