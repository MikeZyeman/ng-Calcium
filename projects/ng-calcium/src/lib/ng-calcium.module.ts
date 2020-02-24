import { NgModule } from '@angular/core';
import { NgCalciumComponent } from './ng-calcium.component';
import { CaButtonModule } from './ca-button/ca-button.module';

@NgModule({
  declarations: [
    NgCalciumComponent
  ],
  imports: [
    CaButtonModule
  ],
  exports: [
    NgCalciumComponent,
    CaButtonModule
  ]
})
export class NgCalciumModule { }
