import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { SortPipe } from './bugs/pipes/sort.pipe';
import { TrimTextPipe } from './bugs/pipes/trimText.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    TrimTextPipe,
    SortPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
