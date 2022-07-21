import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    /* declare the all the UI entities (Components, Directives & Pipes) that a part of this module */
    AppComponent
  ],
  imports: [
    /* Dependency modules */
    BrowserModule
  ],
  providers: [
    /* non UI entities (Services) are registered here */
  ],
  bootstrap: [
    /* top most components */
    AppComponent
  ]
})
export class AppModule { }