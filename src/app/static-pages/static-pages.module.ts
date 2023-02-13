import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RouterModule} from '@angular/router';
import {MyProfileModule} from '../my-profile/my-profile.module';
import {AboutComponent} from './about/about.component';
import {SolvedCasesModule} from '@shared/solved-cases/solved-cases.module';
import {IntroSectionComponent} from './community-page/sections/intro-section/intro-section.component';
import {SupporterSectionComponent} from './community-page/sections/supporter-section/supporter-section.component';
import {ResultSectionComponent} from './community-page/sections/result-section/result-section.component';
import {SurroundingSectionComponent} from './community-page/sections/surrounding-section/surrounding-section.component';
import {SolutionSectionComponent} from './community-page/sections/solution-section/solution-section.component';
import {ProcessSectionComponent} from './community-page/sections/process-section/process-section.component';
import {AboutSectionComponent} from './community-page/sections/about-section/about-section.component';
import {NewsSectionComponent} from './community-page/sections/news-section/news-section.component';
import {CallToActionSectionComponent} from './community-page/sections/call-to-action-section/call-to-action-section.component';
import {NewsletterSectionComponent} from './community-page/sections/newsletter-section/newsletter-section.component';
import {NewsSectionItemComponent} from './community-page/sections/news-section/news-section-item/news-section-item.component';
import {FinanceSectionComponent} from './community-page/sections/finance-section/finance-section.component';
import {SupportUsSectionComponent} from './community-page/sections/support-us-section/support-us-section.component';
import {SupportUsSpecialSectionComponent} from './community-page/sections/support-us-special-section/support-us-special-section.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {SupporterItemComponent} from './community-page/sections/supporter-section/supporter-item/supporter-item.component';
import {BreadcrumbModule} from '@shared/breadcrumb/breadcrumb.module';
import {TrustCheckingPageComponent} from './trust-checking/trust-checking-page/trust-checking-page.component';
import {TrustCheckingCriterionComponent} from './trust-checking/components/trust-checking-criterion/trust-checking-criterion.component';
import {SocialMediaSectionComponent} from './community-page/sections/social-media-section/social-media-section.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@shared/material/material.module';
import {WorkshopPageComponent} from './workshop-page/workshop-page.component';
import {TrustCheckingKitSectionComponent} from './workshop-page/sections/trust-checking-kit-section/trust-checking-kit-section.component';
import {NewsCompetenceSectionComponent} from './workshop-page/sections/news-competence-section/news-competence-section.component';
import {KitComponentsSectionComponent} from './workshop-page/sections/kit-components-section/kit-components-section.component';
import {WorkshopCallToActionSectionComponent} from './workshop-page/sections/workshop-call-to-action-section/workshop-call-to-action-section.component';
import {TeacherRequirementsSectionComponent} from './workshop-page/sections/teacher-requirements-section/teacher-requirements-section.component';
import {WorkshopSectionComponent} from './landing-page/sections/workshop-section/workshop-section.component';
import {KitItemComponent} from './workshop-page/sections/kit-components-section/kit-item.componenent/kit-item.component';
import {TeacherRequirementItemComponent} from './workshop-page/sections/teacher-requirements-section/teacher-requierment.item.component/teacher-requirement.item.component';
import {CommunitySectionComponent} from './landing-page/sections/community-section/community-section.component';
import {AboutUsSectionComponent} from './landing-page/sections/about-us-section/about-us-section.component';
import {CommunityPageComponent} from './community-page/community-page.component';
import {ArchiveSectionComponent} from './community-page/sections/archive-section/archive-section.component';

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
    NewsSectionComponent,
    CallToActionSectionComponent,
    NewsletterSectionComponent,
    NewsSectionItemComponent,
    FinanceSectionComponent,
    SupportUsSectionComponent,
    SupporterItemComponent,
    TrustCheckingPageComponent,
    TrustCheckingCriterionComponent,
    SupportUsSpecialSectionComponent,
    SocialMediaSectionComponent,
    WorkshopSectionComponent,
    WorkshopPageComponent,
    TrustCheckingKitSectionComponent,
    NewsCompetenceSectionComponent,
    TeacherRequirementsSectionComponent,
    KitComponentsSectionComponent,
    WorkshopCallToActionSectionComponent,
    KitItemComponent,
    TeacherRequirementItemComponent,
    CommunitySectionComponent,
    AboutUsSectionComponent,
    CommunityPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MyProfileModule,
    SolvedCasesModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BreadcrumbModule,
    FormsModule,
    MaterialModule
  ],
  exports: [AboutComponent, SupportUsSectionComponent, SupporterSectionComponent]
})
export class StaticPagesModule {
}
