import { Component } from "@angular/core";
import { Bug } from "./models/bug.model";
import { BugOperationsService } from "./services/bugOperations.service";

@Component({
    selector : 'app-bugs',
    templateUrl : 'bugs.component.html',
    styleUrls : ['bugs.component.css']
})
export class BugsComponent{

    sortAttr : string = '';
    sortDesc : boolean = false;

    constructor(public bugOperations : BugOperationsService){
        this.bugOperations.getAll();
    }
}