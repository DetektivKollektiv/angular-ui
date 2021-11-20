import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { OpenCaseListSliderModule } from '@shared/open-case-list-slider/open-case-list-slider.module';
import { AuthService } from '@shared/auth/auth-service/auth.service';
import { MockAuthService } from '@mocks/mock-auth.service';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, OpenCaseListSliderModule],
      declarations: [HomeComponent],
      providers: [{ provide: AuthService, useClass: MockAuthService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
