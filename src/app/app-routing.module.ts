import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/auth/auth-guard/auth.guard';
import {ProfileComponent} from './profile/components/profile/profile.component';
import {HomeComponent} from './home/components/home/home.component';
import {SubmitComponent} from './submit-item/components/submit/submit.component';
import {ReviewComponent} from './review-item/components/review/review.component';
import { ArchiveComponent } from './archive/components/archive/archive.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  // {path: 'info', component: InfoComponent},
  // {path: 'community', component: CommunityGuidelinesComponent},
  // {path: 'data-privacy', component: DataPrivacyComponent},
  // {path: 'imprint', component: ImprintComponent},
  {path: 'submit', component: SubmitComponent},
  {path: 'review', component: ReviewComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'archive', component: ArchiveComponent, canActivate: [AuthGuard]},
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
