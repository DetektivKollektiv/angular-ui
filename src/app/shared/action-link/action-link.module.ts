import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@shared/material/material.module';
import { RouterModule } from '@angular/router';
import { ActionLinkComponent } from './action-link/action-link.component';

@NgModule({
  declarations: [ActionLinkComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [ActionLinkComponent]
})
export class ActionLinkModule {}
