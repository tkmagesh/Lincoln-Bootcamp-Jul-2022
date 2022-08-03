import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoggedInGuard } from './auth/loggedInGuard';
import { LoginComponent } from './auth/login.component';
import { Calculator2Component } from './calculator-2/calculator-2.component';
import { CalculatorAppComponent } from './calculator-app/calculator-app.component';
import { CalculatorResultComponent } from './calculator-result/calculator-result.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { GreeterComponent } from './greeter/greeter.component';
import { NotFoundComponent } from './not-found.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { ProductComponent } from './products/product.component';
import { ProductsComponent } from './products/products.component';
import { SalaryCalculatorComponent } from './salary-calculator/salaryCalculator.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TestComponent } from './test/test.component';

let routes : Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'spinner', 
    component : SpinnerComponent, 
    canActivate : [LoggedInGuard]
  },
  {path : 'greeter', component : GreeterComponent},
  {
      path : 'products', 
      component : ProductsComponent,
      children : [
        { 
          path : ':productName', 
          component : ProductComponent,
          children : [
            { path : 'details', component : ProductDetailsComponent}
          ]
        }
      ]
  },
  {path : 'calculator', component : CalculatorComponent},
  /* {path : 'calculator-result', component : CalculatorResultComponent}, */
  {path : 'calculator-result/:operation', component : CalculatorResultComponent},
  {path : '', redirectTo:'/spinner', pathMatch : 'full'},
  {path : '**', component : NotFoundComponent}
]

@NgModule({
  declarations: [
    /* declare the all the UI entities (Components, Directives & Pipes) that a part of this module */
    AppComponent
    , LoginComponent
    , SpinnerComponent
    , GreeterComponent
    , CalculatorComponent
    , CalculatorResultComponent
    , CalculatorAppComponent
    , Calculator2Component
    , DirectivesComponent
    , ProductsComponent
    , ProductDetailsComponent
    , ProductComponent
    , PipesComponent
    , SalaryCalculatorComponent
    , NotFoundComponent, TestComponent
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
