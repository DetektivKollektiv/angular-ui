import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqPageComponent } from './faq-page.component';
import { FaqBlockComponent } from '../faq-block/faq-block.component';
import { FaqItemComponent } from '../faq-item/faq-item.component';
import { BreadcrumbModule } from '@shared/breadcrumb/breadcrumb.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('FaqPageComponent', () => {
  let component: FaqPageComponent;
  let fixture: ComponentFixture<FaqPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqPageComponent, FaqBlockComponent, FaqItemComponent],
      imports: [
        BreadcrumbModule,
        RouterTestingModule.withRoutes([]),
        HttpClientModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
