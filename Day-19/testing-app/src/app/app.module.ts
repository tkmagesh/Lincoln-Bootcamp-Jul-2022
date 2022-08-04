import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrimTextPipe } from './pipes/trim-text.pipe';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { GreeterComponent } from './components/greeter/greeter.component';

@NgModule({
  declarations: [
    AppComponent,
    TrimTextPipe,
    CalculatorComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
