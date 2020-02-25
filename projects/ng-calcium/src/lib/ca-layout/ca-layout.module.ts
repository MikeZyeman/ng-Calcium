import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule, MediaMatcher } from '@angular/cdk/layout';

import { ContainerDirective } from './container.directive';


@NgModule({
  declarations: [ContainerDirective],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    ContainerDirective
  ]
})
export class CaLayoutModule { }
