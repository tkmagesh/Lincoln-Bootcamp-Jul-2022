import { Component, Input } from "@angular/core";
import { Bug } from "../../models/bug.model";
import { BugOperationsService } from "../../services/bugOperations.service";

@Component({
    selector : 'app-bug-item',
    templateUrl : 'bugItem.component.html',
    styleUrls : ['bugItem.component.css']
})
export class BugItemComponent{
    @Input()
    bug : Bug = { id : 0, name : '', isClosed: false, createdAt : new Date() };

    constructor(private bugOperations : BugOperationsService){

    }

    onRemove(bugToRemove : Bug){
        this.bugOperations.remove(bugToRemove);
    }

    onToggle(bugToToggle : Bug){
        this.bugOperations.toggle(bugToToggle);
        
    }
}