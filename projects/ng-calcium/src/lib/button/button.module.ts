import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonDirective } from './directives/button.directive';
import { WarningButtonDirective } from './directives/warning-button.directive';
import { ErrorButtonDirective } from '../button/directives/error-button.directive';
import { SuccessButtonDirective } from '../button/directives/success-button.directive';
import { InfoButtonDirective } from '../button/directives/info-button.directive';
import { LineButtonDirective } from '../button/directives/line-button.directive';

@NgModule({
  declarations: [
    ButtonDirective, WarningButtonDirective, ErrorButtonDirective, SuccessButtonDirective, InfoButtonDirective, LineButtonDirective
  ],
  imports: [
    CommonModule
  ]
})
export class ButtonModule { }
