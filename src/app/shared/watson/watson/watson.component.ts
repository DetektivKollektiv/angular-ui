import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Factcheck } from '../../../model/factcheck';

@Component({
  selector: 'app-watson',
  templateUrl: './watson.component.html',
  styleUrls: ['./watson.component.scss']
})
export class WatsonComponent {
  @Input() factCheck: Factcheck;
  @Output() closed = new EventEmitter<void>();

  show = false;
}
