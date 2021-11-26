import { NgModule } from '@angular/core';
import { BreadcrumbModule } from '@shared/breadcrumb/breadcrumb.module';
import { FaqBlockComponent } from './components/faq-block/faq-block.component';
import { FaqItemComponent } from './components/faq-item/faq-item.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FaqPageComponent,
    FaqBlockComponent,
    FaqItemComponent
  ],
  exports: [
    FaqPageComponent,
    FaqBlockComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    HttpClientModule
  ]
})
export class FaqModule {
}

