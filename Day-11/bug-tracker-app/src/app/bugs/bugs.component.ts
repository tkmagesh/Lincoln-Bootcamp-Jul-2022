import { Component } from "@angular/core";
import { Bug } from "./models/bug.model";
import { BugOperationsService } from "./services/bugOperations.service";

@Component({
    selector : 'app-bugs',
    templateUrl : 'bugs.component.html',
    styleUrls : ['bugs.component.css']
})
export class BugsComponent{

    bugs : Bug[] = [];
    sortAttr : string = '';
    sortDesc : boolean = false;

    newBugName : string = '';

    constructor(private bugOperations : BugOperationsService){
        this.bugs = this.bugOperations.getAll();
    }

    onAddNew(){
        const newBug = this.bugOperations.createNew(this.newBugName);
        //this.bugs.push(newBug);
        this.bugs = [...this.bugs, newBug];
    }

    onRemove(bugToRemove : Bug){
        this.bugOperations.remove(bugToRemove);
        this.bugs.splice(this.bugs.indexOf(bugToRemove), 1)
    }

    onToggle(bugToToggle : Bug){
        this.bugOperations.toggle(bugToToggle);
    }

    onRemoveClosed(){
        for (let index = this.bugs.length-1 ; index >= 0; index--){
            if (this.bugs[index].isClosed){
                this.onRemove(this.bugs[index]);
            }
        }
    }

    //TO BE FIXED
    getClosedCount() : number {
        //return this.bugs.filter(bug => bug.isClosed).length
        return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
    }
}