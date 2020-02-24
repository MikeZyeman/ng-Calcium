import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button.directive';
import { ButtonSuccessDirective } from './button-success.directive';
import { ButtonErrorDirective } from './button-error.directive';
import { ButtonPrimaryDirective } from './button-primary.directive';

@NgModule({
  declarations: [ButtonDirective, ButtonSuccessDirective, ButtonErrorDirective, ButtonPrimaryDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonDirective,
    ButtonPrimaryDirective,
    ButtonSuccessDirective,
    ButtonErrorDirective
  ]
})
export class CaButtonModule { }
