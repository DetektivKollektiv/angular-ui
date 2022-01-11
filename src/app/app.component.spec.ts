import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { LoaderModule } from './shared/loader/loader.module';
import { AuthService } from './shared/auth/auth-service/auth.service';
import { MockAuthService } from '../test/mocks/mock-auth.service';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MaterialModule } from './shared/material/material.module';
import { ProfileModule } from './profile/profile.module';
import { HighscoresModule } from './highscores/highscores.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderModule, MaterialModule, RouterTestingModule, TranslateModule.forRoot(), ProfileModule, HighscoresModule],
      declarations: [AppComponent, FooterComponent, HeaderComponent],
      providers: [{ provide: AuthService, useClass: MockAuthService }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
