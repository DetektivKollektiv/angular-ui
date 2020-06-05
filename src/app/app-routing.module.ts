import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReviewItemComponent} from './detektiv-kollektiv/components/review-item/review-item.component';
import {CheckItemComponent} from './detektiv-kollektiv/components/check-item/check-item.component';
import {DashboardComponent} from './detektiv-kollektiv/components/dashboard/dashboard.component';
import {LoginComponent} from './detektiv-kollektiv/components/dialogs/login/login.component';
import {AuthGuard} from './shared/auth/auth-guard/auth.guard';
import { ListItemsComponent } from './detektiv-kollektiv/components/list-items/list-items.component';
import {ProfileComponent} from './profile/components/profile/profile.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'check', component: CheckItemComponent},
  {path: 'review', component: ReviewItemComponent, canActivate: [AuthGuard]},
  {path: 'items', component: ListItemsComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
