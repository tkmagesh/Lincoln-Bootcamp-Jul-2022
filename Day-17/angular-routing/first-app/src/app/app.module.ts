import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Calculator2Component } from './calculator-2/calculator-2.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { GreeterComponent } from './greeter/greeter.component';
import { NotFoundComponent } from './not-found.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductsComponent } from './products/products.component';
import { SalaryCalculatorComponent } from './salary-calculator/salaryCalculator.component';
import { SpinnerComponent } from './spinner/spinner.component';

let routes : Routes = [
  {path : 'spinner', component : SpinnerComponent},
  {path : 'greeter', component : GreeterComponent},
  {path : 'products', component : ProductsComponent},
  {path : 'calculator', component : CalculatorComponent},
  {path : '', redirectTo:'/spinner', pathMatch : 'full'},
  {path : '**', component : NotFoundComponent}
]

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
    , NotFoundComponent
  ],

  imports: [
    /* Dependency modules */
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
