import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardSliderComponent } from './leaderboard-slider/leaderboard-slider.component';
import { LeaderboardElementComponent } from './leaderboard-element/leaderboard-element.component';



@NgModule({
  declarations: [LeaderboardSliderComponent, LeaderboardElementComponent],
  exports: [LeaderboardSliderComponent],
  imports: [
    CommonModule
  ]
})
export class LeaderboardSliderModule { }
