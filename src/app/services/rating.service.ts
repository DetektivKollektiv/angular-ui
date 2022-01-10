import { Injectable } from '@angular/core';
import { RatingBound } from './model/rating-bound';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private bounds: RatingBound[] = [
    {
      lower: -1,
      upper: 33,
      text: 'Dieser Fall ist nicht vertrauenswürdig',
      info: 'Es ist sehr wahrscheinlich, dass es sich hierbei um Falsch- order Desinformation handelt.',
      color: 'red'
    },
    {
      lower: 33,
      upper: 66,
      text: 'Dieser Fall ist eher nicht vertrauenswürdig',
      info: 'Du solltest die Informationen in diesem Fall unbedingt mit großer Vorsicht behandeln.',
      color: 'orange'
    },
    {
      lower: 66,
      upper: 83,
      text: 'Dieser Fall ist eher vertrauenswürdig',
      info: 'Du kannst den Informationen in diesem Fall vertrauen.',
      color: 'light-green'
    },
    {
      lower: 83,
      upper: 100,
      text: 'Dieser Fall ist vertrauenswürdig',
      info: 'Du kannst den Informationen in diesem Fall höchstwahrscheinlich vertrauen.',
      color: 'green'
    }
  ];


  getTitleForScore(resultScore: number): string {

    return this.bounds.find((b) => this.isInBounds(b, resultScore)).text;
  }

  getInfoTextForScore(resultScore: number): string {

    return this.bounds.find((b) => this.isInBounds(b, resultScore)).info;
  }

  getColorForScore(resultScore: number): string {

    return this.bounds.find((b) => this.isInBounds(b, resultScore)).color;
  }

  private isInBounds(bound: RatingBound, score: number): boolean {
    return score > bound.lower && score <= bound.upper;
  }
}
