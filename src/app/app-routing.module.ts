import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth/auth-guard/auth.guard';
import { ProfileComponent } from './profile/components/profile/profile.component';
import { HomeComponent } from './home/components/home/home.component';
import { SubmitComponent } from './submit-item/components/submit/submit.component';
import { SubmitPageComponent } from './submit-item/components/submit-page/submit-page.component';
import { SubmitSuccessPageComponent } from './submit-item/components/submit-success-page/submit-success-page.component';
import { ReviewSuccessPageComponent } from './review-item/components/review-success-page/review-success-page.component';

import { ReviewComponent } from './review-item/components/review/review.component';
import { ReviewPageComponent } from './review-item/components/review-page/review-page.component';
import { ArchiveComponent } from './archive/components/archive/archive.component';
import { ArchiveDetailsPageComponent } from './archive/components/archive-details-page/archive-details-page.component';

/* Auth page routes */
import { LoginPageComponent } from './authentication-pages/components/login-page/components/login-page/login-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/components/forgot-password-page/forgot-password-page.component';
import { RegisterPageComponent } from './authentication-pages/components/register-page/components/register-page/register-page.component';
import { ConfirmEmailPageComponent } from './confirm-email-page/components/confirm-email-page/confirm-email-page.component';
// eslint-disable-next-line max-len
import { SetPasswordPageComponent } from './authentication-pages/components/set-password-page/components/set-password-page/set-password-page.component';
/* / Auth page routes */

import { CommunityGuidelinesComponent } from './core/components/community-guidelines/community-guidelines.component';
import { UnsavedChangesGuard } from './shared/unsaved-changes/guard/unsaved-changes.guard';
import { MyFileComponent } from './my-file/components/my-file/my-file.component';
import { IssuesComponent } from './issues/components/issues/issues.component';

import { MainLayoutComponent } from './main-layout/main-layout.component';

import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/components/my-profile/my-profile.component';
import { ImprintComponent } from './core/components/imprint/imprint.component';
import { PrivacyStatementComponent } from './core/components/privacy-statement/privacy-statement.component';
import {FaqPageComponent} from "./faq/components/faq-page/faq-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'submit_old', component: SubmitComponent },
      {
        path: 'submit/success',
        component: SubmitSuccessPageComponent
      },
      {
        path: 'submit',
        component: SubmitPageComponent
      },
      {
        path: 'review/success',
        component: ReviewSuccessPageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'review',
        component: ReviewPageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'archive/:id',
        component: ArchiveDetailsPageComponent
      },
      {
        path: 'archive',
        component: ArchiveComponent
      },
      {
        path: 'my-profile',
        component: MyProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'faq',
        component: FaqPageComponent
      },
      {
        path: 'imprint',
        component: ImprintComponent
      },
      {
        path: 'privacy-statement',
        component: PrivacyStatementComponent
      },
      { path: '', component: HomeComponent }
    ]
  },
  {
    path: 'login',
    component: FooterOnlyLayoutComponent,
    children: [{ path: '', component: LoginPageComponent }]
  },
  {
    path: 'forgot-password',
    component: FooterOnlyLayoutComponent,
    children: [{ path: '', component: ForgotPasswordPageComponent }]
  },
  {
    path: 'set-password',
    component: FooterOnlyLayoutComponent,
    children: [{ path: '', component: SetPasswordPageComponent }]
  },
  {
    path: 'register',
    component: FooterOnlyLayoutComponent,
    children: [{ path: '', component: RegisterPageComponent }]
  },
  {
    path: 'confirm-email',
    component: FooterOnlyLayoutComponent,
    children: [{ path: '', component: ConfirmEmailPageComponent }]
  },
  { path: 'terms', component: CommunityGuidelinesComponent },

  // {
  //   path: 'review',
  //   component: ReviewComponent,
  //   canActivate: [AuthGuard],
  //   canDeactivate: [UnsavedChangesGuard],
  // },
  { path: 'my-file', component: MyFileComponent, canActivate: [AuthGuard] },
  { path: 'issues', component: IssuesComponent },
  { path: 'about', component: AboutComponent },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy',
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
