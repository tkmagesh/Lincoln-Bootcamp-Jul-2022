import { Component, Input } from "@angular/core";
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

    onRemove(bugToRemove : Bug){
        this.bugOperations.remove(bugToRemove);
        //this.bugs.splice(this.bugs.indexOf(bugToRemove), 1)
        this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
    }

    onToggle(bugToToggle : Bug){
        const toggledBug = this.bugOperations.toggle(bugToToggle);
        this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
    }

    onRemoveClosed(){
        /* for (let index = this.bugs.length-1 ; index >= 0; index--){
            if (this.bugs[index].isClosed){
                this.onRemove(this.bugs[index]);
            }
        } */
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.onRemove(closedBug))
    }
}