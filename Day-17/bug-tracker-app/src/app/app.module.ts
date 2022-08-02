import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsModule } from './bugs/bugs.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BugsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
