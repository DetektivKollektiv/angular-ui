import {Component} from '@angular/core';
import {AuthService} from './shared/auth/auth-service/auth.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {LoginComponent} from './detektiv-kollektiv/components/dialogs/login/login.component';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translateService: TranslateService) {
    this.translateService.use('de-DE');
  }
}
