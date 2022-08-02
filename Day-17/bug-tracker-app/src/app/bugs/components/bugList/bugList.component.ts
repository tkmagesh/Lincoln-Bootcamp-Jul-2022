import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Bug } from "../../models/bug.model";
import { BugOperationsService } from "../../services/bugOperations.service";

@Component({
    selector : 'app-bug-list',
    templateUrl : 'bugList.component.html',
    styleUrls : ['bugList.component.css']
})
export class BugListComponent{

    @Input()
    bugs : Bug[] = []

    
    constructor(private bugOperations : BugOperationsService){

    }

   

    onRemoveClosed(){
        this.bugOperations.removeClosed();
    }
}