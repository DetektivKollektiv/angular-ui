import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighScoreSidebarComponent } from './components/high-score-sidebar/high-score-sidebar.component';
import {MaterialModule} from '../shared/material/material.module';



@NgModule({
  declarations: [HighScoreSidebarComponent],
  exports: [
    HighScoreSidebarComponent
  ],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class HighscoresModule { }
