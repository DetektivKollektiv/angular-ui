import { Injectable } from '@angular/core';
import { RatingBound } from './model/rating-bound';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private factor = 25;

  private bounds: RatingBound[] = [
    {
      lower: -1,
      upper: 33,
      text: 'Dieser Fall ist nicht vertrauenswürdig',
      info: 'Du solltest die Informationen in diesem Fall unbedingt mit Vorsicht behandeln.',
      color: 'red'
    },
    {
      lower: 33,
      upper: 66,
      text: 'Dieser Fall ist eher nicht vertrauenswürdig',
      info: 'Du solltest die Informationen in diesem Fall mit Vorsicht behandeln.',
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
      info: 'Du kannst den Informationen in diesem Fall uneingeschränkt vertrauen.',
      color: 'green'
    }
  ];

  convertResultScoreToScore(resultScore: number): number {
    return Math.round(resultScore * this.factor);
  }

  convertScoreToResultScore(score: number) {
    return score / this.factor;
  }

  getTitleForScore(resultScore: number): string {
    const score = this.convertResultScoreToScore(resultScore);

    return this.bounds.find((b) => this.isInBounds(b, score)).text;
  }

  getInfoTextForScore(resultScore: number): string {
    const score = this.convertResultScoreToScore(resultScore);

    return this.bounds.find((b) => this.isInBounds(b, score)).info;
  }

  getColorForScore(resultScore: number): string {
    const score = this.convertResultScoreToScore(resultScore);

    return this.bounds.find((b) => this.isInBounds(b, score)).color;
  }

  private isInBounds(bound: RatingBound, score: number): boolean {
    return score > bound.lower && score <= bound.upper;
  }
}
