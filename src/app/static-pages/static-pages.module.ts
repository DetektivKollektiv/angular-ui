import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { MyProfileModule } from '../my-profile/my-profile.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, RouterModule, MyProfileModule]
})
export class StaticPagesModule {}
