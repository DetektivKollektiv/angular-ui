import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityGuidelinesComponent } from './community-guidelines.component';
import { BreadcrumbModule } from '@shared/breadcrumb/breadcrumb.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('CommunityGuidelinesComponent', () => {
  let component: CommunityGuidelinesComponent;
  let fixture: ComponentFixture<CommunityGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityGuidelinesComponent ],
      imports: [
        BreadcrumbModule,
        RouterTestingModule.withRoutes([]),
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
