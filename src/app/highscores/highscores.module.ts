import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighScoreSidebarComponent } from './components/high-score-sidebar/high-score-sidebar.component';



@NgModule({
  declarations: [HighScoreSidebarComponent],
  exports: [
    HighScoreSidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HighscoresModule { }
