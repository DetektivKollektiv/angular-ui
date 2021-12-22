import { Component, Input } from '@angular/core';
import { Detective } from '../../../model/detective';

@Component({
  selector: 'app-detective-list',
  templateUrl: './detective-list.component.html',
  styleUrls: ['./detective-list.component.scss']
})
export class DetectiveListComponent {
  @Input() loading: boolean;

  @Input() detectives: Detective[] = [];
}
