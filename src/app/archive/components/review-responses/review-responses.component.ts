import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-review-responses',
  templateUrl: './review-responses.component.html',
  styleUrls: ['./review-responses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewResponsesComponent {
  @Input() loading: boolean;

  // Review responses are not available with the simplified archive data.
  givenResponsesPercentages$ = of([]);
  notGivenResponsesPercentages$ = of([]);
  noCriteriaResponsesPercentage$ = of({ count: 0 });
}
