import {NgModule} from '@angular/core';
import {BreadcrumbModule} from '@shared/breadcrumb/breadcrumb.module';
import {FaqBlockComponent} from './components/faq-block/faq-block.component';
import {FaqItemComponent} from './components/faq-item/faq-item.component';
import {FaqPageComponent} from './components/faq-page/faq-page.component';
import { CommonModule } from '@angular/common';

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
    BreadcrumbModule
  ]
})
export class FaqModule {
}

