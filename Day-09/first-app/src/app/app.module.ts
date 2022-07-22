import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Calculator2Component } from './calculator-2/calculator-2.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { GreeterComponent } from './greeter/greeter.component';
import { ProductsComponent } from './products/products.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    /* declare the all the UI entities (Components, Directives & Pipes) that a part of this module */
    AppComponent
    , SpinnerComponent
    , GreeterComponent
    , CalculatorComponent
    , Calculator2Component
    , DirectivesComponent
    , ProductsComponent
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
   /* AppComponent
    , SpinnerComponent
    , GreeterComponent
    , CalculatorComponent
    , Calculator2Component
     DirectivesComponent
     */
    ProductsComponent
  ]
})
export class AppModule { }
