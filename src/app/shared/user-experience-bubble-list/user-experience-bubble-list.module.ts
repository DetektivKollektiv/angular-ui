import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserExperienceBubbleListComponent } from './user-experience-bubble-list/user-experience-bubble-list.component';
import { UserExperienceBubbleComponent } from '../user-experience-bubble/user-experience-bubble.component';

@NgModule({
  declarations: [UserExperienceBubbleListComponent, UserExperienceBubbleComponent],
  exports:[UserExperienceBubbleListComponent],
  imports: [
    CommonModule
  ]
})
export class UserExperienceBubbleListModule { }
