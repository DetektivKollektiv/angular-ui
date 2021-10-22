import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private factor = 25;

  convertResultScoreToScore(resultScore: number): number {
    return Math.round(resultScore * this.factor);
  }

  convertScoreToResultScore(score: number) {
    return score / this.factor;
  }

  getTitleForScore(resultScore: number): string {
    const score = this.convertResultScoreToScore(resultScore);
    let title = 'Dieser Fall ist vertrauenswürdig'; //(score > 84 && score <= 100)

    if (score <= 33) {
      title = 'Dieser Fall ist nicht vertrauenswürdig';
    } else if (score > 33 && score <= 66) {
      title = 'Dieser Fall ist eher nicht vertrauenswürdig';
    } else if (score > 66 && score <= 83) {
      title = 'Dieser Fall ist eher vertrauenswürdig';
    }

    return title;
  }

  getInfoTextForScore(resultScore: number): string {
    const score = this.convertResultScoreToScore(resultScore);
    let infoText = 'Du kannst den Informationen in diesem Fall uneingeschränkt vertrauen.'; //(score > 84 && score <= 100)

    if (score <= 33) {
      infoText = 'Du solltest die Informationen in diesem Fall unbedingt mit Vorsicht behandeln.';
    } else if (score > 33 && score <= 66) {
      infoText = 'Du solltest die Informationen in diesem Fall mit Vorsicht behandeln.';
    } else if (score > 66 && score <= 83) {
      infoText = 'Du kannst den Informationen in diesem Fall vertrauen.';
    }

    return infoText;
  }
  getColorForScore(resultScore: number): string {
    const score = this.convertResultScoreToScore(resultScore);
    let color = 'green'; //(score > 84 && score <= 100)

    if (score <= 33) {
      color = 'red';
    } else if (score > 33 && score <= 66) {
      color = 'orange';
    } else if (score > 66 && score <= 83) {
      color = 'light-green';
    }

    return color;
  }
}
