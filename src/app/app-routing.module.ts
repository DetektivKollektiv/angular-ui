
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth/auth-guard/auth.guard';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { HomeComponent } from './home/components/home/home.component';
import { SubmitComponent } from './submit-item/components/submit/submit.component';
import { ReviewComponent } from './review-item/components/review/review.component';
import { ArchiveComponent } from './archive/components/archive/archive.component';

/* Auth page routes */
import { LoginPageComponent } from './login-page/components/login-page/login-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/components/forgot-password-page/forgot-password-page.component';
import { RegisterPageComponent } from './register-page/components/register-page/register-page.component';
import { ConfirmEmailPageComponent } from './confirm-email-page/components/confirm-email-page/confirm-email-page.component';
import { SetPasswordPageComponent } from './set-password-page/components/set-password-page/set-password-page.component';
/* / Auth page routes */

import { CommunityGuidelinesComponent } from './core/components/community-guidelines/community-guidelines.component';
import { UnsavedChangesGuard } from './shared/unsaved-changes/guard/unsaved-changes.guard';
import { MyFileComponent } from './my-file/components/my-file/my-file.component';
import { IssuesComponent } from './issues/components/issues/issues.component';


import { MainLayoutComponent } from './main-layout/main-layout.component';

import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  {
    path: 'login',
    component: FooterOnlyLayoutComponent,
    children: [
      { path: '', component: LoginPageComponent }
    ]
  },
  {
    path: 'forgot-password',
    component: FooterOnlyLayoutComponent,
    children: [
      { path: '', component: ForgotPasswordPageComponent }
    ]
  },
  {
    path: 'set-password',
    component: FooterOnlyLayoutComponent,
    children: [
      { path: '', component: SetPasswordPageComponent }
    ]
  },
  {
    path: 'register',
    component: FooterOnlyLayoutComponent,
    children: [
      { path: '', component: RegisterPageComponent }
    ]
  },
  {
    path: 'confirm-email',
    component: FooterOnlyLayoutComponent,
    children: [
      { path: '', component: ConfirmEmailPageComponent }
    ]
  },
  { path: 'terms', component: CommunityGuidelinesComponent },
  { path: 'submit', component: SubmitComponent },
  {
    path: 'review',
    component: ReviewComponent,
    canActivate: [AuthGuard],
    canDeactivate: [UnsavedChangesGuard],
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'archive',
    component: ArchiveComponent,
  },
  {
    path: 'archive/:id',
    component: ArchiveComponent,
    canActivate: [AuthGuard],
  },
  { path: 'my-file', component: MyFileComponent, canActivate: [AuthGuard] },
  { path: 'issues', component: IssuesComponent },
  { path: 'about', component: AboutComponent },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
