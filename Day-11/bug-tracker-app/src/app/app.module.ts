import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugEditComponent } from './bugs/components/bugEdit/bugEdit.component';
import { BugItemComponent } from './bugs/components/bugItem/bugItem.component';
import { BugListComponent } from './bugs/components/bugList/bugList.component';
import { BugSortComponent } from './bugs/components/bugSort/bugSort.component';
import { BugStatsComponent } from './bugs/components/bugStats/bugStats.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent,
    BugSortComponent,
    BugListComponent,
    BugItemComponent
  ],
  imports: [
    BrowserModule,
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
