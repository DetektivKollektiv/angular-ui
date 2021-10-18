import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-question-carousel',
  templateUrl: './question-carousel.component.html',
  styleUrls: ['./question-carousel.component.scss']
})
export class QuestionCarouselComponent {
  @Input() public questions: any[];

  isCollapsed = true;
}
