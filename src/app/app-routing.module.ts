import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewItemComponent } from './detektiv-kollektiv/components/review-item/review-item.component';
import { CheckItemComponent } from './detektiv-kollektiv/components/check-item/check-item.component';
import { DashboardComponent } from './detektiv-kollektiv/components/dashboard/dashboard.component';


const routes: Routes = [  
  { path: 'review', component: ReviewItemComponent },
  { path: 'check',      component: CheckItemComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
