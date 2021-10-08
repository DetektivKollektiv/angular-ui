import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingColorService {

  constructor() { }

  getColorForScore(score: number)
  {
    let color = 'green'; //(score > 84 && score <= 100)

    if (score <= 33) {
      color = 'red';
    } 
    else if (score > 33 && score <= 66) {
      color = 'orange';
    }
    else if (score > 66 && score <= 83) {
      color = 'light-green';
    }

    return color;
  }
}
