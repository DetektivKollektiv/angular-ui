import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { MyProfileModule } from '../my-profile/my-profile.module';
import { AboutComponent } from './about/about.component';
import { ArchiveModule } from '../archive/archive.module';
import { SolvedCasesModule } from '@shared/solved-cases/solved-cases.module';

@NgModule({
  declarations: [LandingPageComponent, AboutComponent],
  imports: [CommonModule, RouterModule, MyProfileModule, SolvedCasesModule],
  exports: [AboutComponent]
})
export class StaticPagesModule {}
