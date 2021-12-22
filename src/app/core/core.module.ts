import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityGuidelinesComponent } from './components/community-guidelines/community-guidelines.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { PrivacyStatementComponent } from './components/privacy-statement/privacy-statement.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from '../shared/auth/auth.module';
import { LoaderModule } from '../shared/loader/loader.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { DeleteUserDialogComponent } from './dialogs/delete-user-dialog/delete-user-dialog.component';
import { MenuDialogComponent } from './dialogs/menu-dialog/menu.component';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from '@shared/breadcrumb/breadcrumb.module';
import { ReportItemDialogComponent } from './dialogs/report-item-dialog/report-item-dialog.component';
import { ButtonModule } from '@shared/button/button.module';
import { PipesModule } from '@shared/pipes/pipes.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CommunityGuidelinesComponent,
    ImprintComponent,
    PrivacyStatementComponent,
    DeleteUserDialogComponent,
    MenuDialogComponent,
    ReportItemDialogComponent
  ],
  exports: [FooterComponent, HeaderComponent],
  imports: [CommonModule, AuthModule, LoaderModule, RouterModule, MaterialModule, FormsModule, BreadcrumbModule, ButtonModule, PipesModule]
})
export class CoreModule {}
