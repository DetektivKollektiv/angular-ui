import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { MyProfileModule } from '../my-profile/my-profile.module';
import { AboutComponent } from './about/about.component';
import { SolvedCasesModule } from '@shared/solved-cases/solved-cases.module';
import { IntroSectionComponent } from './landing-page/sections/intro-section/intro-section.component';
import { SupporterSectionComponent } from './landing-page/sections/supporter-section/supporter-section.component';
import { ResultSectionComponent } from './landing-page/sections/result-section/result-section.component';
import { SurroundingSectionComponent } from './landing-page/sections/surrounding-section/surrounding-section.component';
import { SolutionSectionComponent } from './landing-page/sections/solution-section/solution-section.component';
import { ProcessSectionComponent } from './landing-page/sections/process-section/process-section.component';
import { ArchiveSectionComponent } from './landing-page/sections/archive-section/archive-section.component';
import { AboutSectionComponent } from './landing-page/sections/about-section/about-section.component';
import { NumbersSectionComponent } from './landing-page/sections/numbers-section/numbers-section.component';
import { NewsSectionComponent } from './landing-page/sections/news-section/news-section.component';
import { CallToActionSectionComponent } from './landing-page/sections/call-to-action-section/call-to-action-section.component';
import { NewsletterSectionComponent } from './landing-page/sections/newsletter-section/newsletter-section.component';
import { NewsSectionItemComponent } from './landing-page/sections/news-section/news-section-item/news-section-item.component';
import { SupportUsSectionComponent } from './landing-page/sections/support-us-section/support-us-section.component';
import { HttpClientModule } from '@angular/common/http';
import { SupporterItemComponent } from './landing-page/sections/supporter-section/supporter-item/supporter-item.component';
import { BreadcrumbComponent } from '@shared/breadcrumb/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from '@shared/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    AboutComponent,
    IntroSectionComponent,
    SupporterSectionComponent,
    ResultSectionComponent,
    SurroundingSectionComponent,
    SolutionSectionComponent,
    ProcessSectionComponent,
    ArchiveSectionComponent,
    AboutSectionComponent,
    NumbersSectionComponent,
    NewsSectionComponent,
    CallToActionSectionComponent,
    NewsletterSectionComponent,
    NewsSectionItemComponent,
    SupportUsSectionComponent,
    SupporterItemComponent
  ],
  imports: [CommonModule, RouterModule, MyProfileModule, SolvedCasesModule, HttpClientModule, BreadcrumbModule],
  exports: [AboutComponent, SupportUsSectionComponent]
})
export class StaticPagesModule {}
