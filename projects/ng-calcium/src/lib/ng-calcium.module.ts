import { NgModule } from '@angular/core';
import { NgCalciumComponent } from './ng-calcium.component';
import { CaButtonModule } from './ca-button/ca-button.module';
import { CaLayoutModule } from './ca-layout/ca-layout.module';

@NgModule({
  declarations: [
    NgCalciumComponent
  ],
  imports: [
    CaButtonModule,
    CaLayoutModule
  ],
  exports: [
    NgCalciumComponent,
    CaButtonModule,
    CaLayoutModule
  ]
})
export class NgCalciumModule { }
