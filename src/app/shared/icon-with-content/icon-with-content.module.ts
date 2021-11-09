import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconWithContentComponent, IconWithContentHeaderDirective } from './icon-with-content/icon-with-content.component';

@NgModule({
  declarations: [IconWithContentComponent, IconWithContentHeaderDirective],
  imports: [CommonModule],
  exports: [IconWithContentComponent, IconWithContentHeaderDirective]
})
export class IconWithContentModule {}
