import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor() { }

  public getLevelNameById(id: number): string {
    switch (id) {
      case 1:
        return 'Lupenhalter*in';
        break;
      case 2:
        return 'Kundschafter*in';
        break;
      default:
        return '';
        break;
    }
  }
}
