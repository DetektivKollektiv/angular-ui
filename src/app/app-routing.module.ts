import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth/auth-guard/auth.guard';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { HomeComponent } from './home/components/home/home.component';
import { SubmitComponent } from './submit-item/components/submit/submit.component';
import { ReviewComponent } from './review-item/components/review/review.component';
import { ArchiveComponent } from './archive/components/archive/archive.component';
import { DataPrivacyComponent } from './core/components/data-privacy/data-privacy.component';
import { CommunityGuidelinesComponent } from './core/components/community-guidelines/community-guidelines.component';
import { UnsavedChangesGuard } from './shared/unsaved-changes/guard/unsaved-changes.guard';
import { MyFileComponent } from './my-file/components/my-file/my-file.component';
import { IssuesComponent } from './issues/components/issues/issues.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  // {path: 'info', component: InfoComponent},
  { path: 'terms', component: CommunityGuidelinesComponent },
  { path: 'data-privacy', component: DataPrivacyComponent },
  // {path: 'imprint', component: ImprintComponent},
  { path: 'submit', component: SubmitComponent },
  { path: 'review', component: ReviewComponent, canActivate: [AuthGuard], canDeactivate: [UnsavedChangesGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'archive', component: ArchiveComponent, canActivate: [AuthGuard] },
  { path: 'my-file', component: MyFileComponent, canActivate: [AuthGuard] },
  { path: 'issues', component: IssuesComponent },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
