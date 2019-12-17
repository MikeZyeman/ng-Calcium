import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgCalciumModule } from 'ng-calcium';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    NgCalciumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
