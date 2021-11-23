import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivacyStatementComponent } from './privacy-statement.component';
import { BreadcrumbModule } from '@shared/breadcrumb/breadcrumb.module';
import { RouterTestingModule } from '@angular/router/testing';



describe('PrivacyStatementComponent', () => {
  let component: PrivacyStatementComponent;
  let fixture: ComponentFixture<PrivacyStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyStatementComponent ],
      imports: [
        BreadcrumbModule,
        RouterTestingModule.withRoutes([]),
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
