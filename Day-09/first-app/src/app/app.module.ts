import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Calculator2Component } from './calculator-2/calculator-2.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { GreeterComponent } from './greeter/greeter.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductsComponent } from './products/products.component';
import { SalaryCalculatorComponent } from './salary-calculator/salaryCalculator.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SalaryCalculatorModel } from './salary-calculator/salaryCalculator.model';

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
    , PipesComponent
    , SalaryCalculatorComponent
  ],

  imports: [
    /* Dependency modules */
    BrowserModule
  ],
  providers: [
    /* non UI entities (Services) are registered here */
    { provide : SalaryCalculatorModel, useClass : SalaryCalculatorModel },
    /* SalaryCalculatorModel */

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
