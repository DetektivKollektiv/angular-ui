import { Injectable } from '@angular/core';
import { Leaderboard } from '../model/leaderboard';
import { API } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  private serviceBasePath = 'user_service';

  constructor() {}

  public getTopUsers(): Promise<Leaderboard> {
    return new Promise((resolve, reject) => {
      API.get(this.serviceBasePath, '/ranking', {})
        .then((leaderboard: Leaderboard) => resolve(leaderboard))
        .catch();
    });
  }
}
