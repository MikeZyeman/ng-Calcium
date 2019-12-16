import { NgModule } from '@angular/core';
import { NgCalciumComponent } from './ng-calcium.component';
import { GridComponent } from './components/grid/grid.component';



@NgModule({
  declarations: [NgCalciumComponent, GridComponent],
  imports: [
  ],
  exports: [
    NgCalciumComponent,
    GridComponent
  ]
})
export class NgCalciumModule { }
