import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgCalciumModule } from 'ng-calcium';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgCalciumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
