import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/auth/auth-guard/auth.guard';
import {ProfileComponent} from './profile/components/profile/profile.component';
import {HomeComponent} from './home/components/home/home.component';
import {SubmitComponent} from './submit-item/components/submit/submit.component';
import {ReviewComponent} from './review-item/components/review/review.component';
import {InfoComponent} from './frame/components/info/info.component';
import {CommunityGuidelinesComponent} from './frame/components/community-guidelines/community-guidelines.component';
import {FinishComponent} from './submit-item/components/finish/finish.component';
import {DataPrivacyComponent} from './frame/components/data-privacy/data-privacy.component';
import {ImprintComponent} from './frame/components/imprint/imprint.component';


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
  {path: 'finish', component: FinishComponent},
  {path: 'review', component: ReviewComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // {path: 'check', component: CheckItemComponent},
  // {path: 'review', component: ReviewItemComponent, canActivate: [AuthGuard]},
  // {path: 'items', component: ListItemsComponent, canActivate: [AuthGuard]},
  // {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
