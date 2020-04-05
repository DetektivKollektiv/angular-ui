import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckItemComponent } from './components/check-item/check-item.component';
import { ReviewItemComponent } from './components/review-item/review-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [CheckItemComponent, ReviewItemComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class DetektivKollektivModule { }
