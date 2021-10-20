import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Globals } from '@shared/helper/globals/globals';
import { map } from 'rxjs/operators';
import { ArchiveState } from '../../state/archive.state';

@Component({
  selector: 'app-review-responses',
  templateUrl: './review-responses.component.html',
  styleUrls: ['./review-responses.component.scss']
})
export class ReviewResponsesComponent {
  @Input() loading: boolean;

  givenResponsesPercentages$ = this.store
    .select(ArchiveState.filteredResponsesPercentages)
    .pipe(map((fn) => fn(Globals.reviewAnswers, (count) => count > 0)));
  notGivenResponsesPercentages$ = this.store
    .select(ArchiveState.filteredResponsesPercentages)
    .pipe(map((fn) => fn(Globals.reviewAnswers, (count) => !count)));
  noCriteriaResponsesPercentage$ = this.store.select(ArchiveState.filteredResponsesPercentages).pipe(
    map((fn) => fn([Globals.criteriaNotApplicableReviewAnswer])),
    map((responses) => responses[0])
  );

  constructor(private store: Store) {}
}
