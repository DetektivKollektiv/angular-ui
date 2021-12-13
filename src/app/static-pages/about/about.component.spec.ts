import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BreadcrumbModule } from '@shared/breadcrumb/breadcrumb.module';
import { CallToActionSectionComponent } from '../landing-page/sections/call-to-action-section/call-to-action-section.component';
import { SupportUsSectionComponent } from '../landing-page/sections/support-us-section/support-us-section.component';
import { SupporterItemComponent } from '../landing-page/sections/supporter-section/supporter-item/supporter-item.component';
import { SupporterSectionComponent } from '../landing-page/sections/supporter-section/supporter-section.component';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        SupporterSectionComponent,
        SupportUsSectionComponent,
        CallToActionSectionComponent,
        SupporterItemComponent
      ],
      imports: [BreadcrumbModule, RouterTestingModule, HttpClientModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
