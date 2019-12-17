import { NgModule } from '@angular/core';
import { NgCalciumComponent } from './ng-calcium.component';

import { ButtonModule } from './button/button.module';
import { TableModule } from './table/table.module';
import { LayoutModule } from './layout/layout.module';
import { NavigationModule } from './navigation/navigation.module';
import { FormsModule } from './forms/forms.module';
import { FloatsModule } from './floats/floats.module';

@NgModule({
  declarations: [
    NgCalciumComponent
  ],
  imports: [
    ButtonModule,
    TableModule,
    LayoutModule,
    NavigationModule,
    FormsModule,
    FloatsModule
  ],
  exports: [
    NgCalciumComponent
  ]
})
export class NgCalciumModule { }
