import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { UtilsModule } from "../utils/utils.module";
import { BugsComponent } from "./bugs.component";
import { BugEditComponent } from "./components/bugEdit/bugEdit.component";
import { BugItemComponent } from "./components/bugItem/bugItem.component";
import { BugListComponent } from "./components/bugList/bugList.component";
import { BugSortComponent } from "./components/bugSort/bugSort.component";
import { BugStatsComponent } from "./components/bugStats/bugStats.component";
import { ClosedCountPipe } from "./pipes/closedCount.pipe";

@NgModule({
    declarations : [
        BugsComponent,
        BugEditComponent,
        BugSortComponent,
        BugStatsComponent,
        BugListComponent,
        BugItemComponent,
        ClosedCountPipe
    ],
    providers : [],
    imports : [
        CommonModule,
        UtilsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports : [
        BugsComponent
    ]
})
export class BugsModule{

}