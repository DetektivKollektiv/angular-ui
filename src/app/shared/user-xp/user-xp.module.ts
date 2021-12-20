import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserXpBarComponent } from './user-xp-bar/user-xp-bar.component';
import { UserXpScoreComponent } from './user-xp-score/user-xp-score.component';

@NgModule({
  declarations: [UserXpBarComponent, UserXpScoreComponent],
  imports: [CommonModule],
  exports: [UserXpBarComponent, UserXpScoreComponent]
})
export class UserXpModule {}
