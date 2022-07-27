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

   

    constructor(private bugOperations : BugOperationsService){
        this.bugs = this.bugOperations.getAll();
    }

    //the following has been moved to the bugEdit.component.ts
    /* 
    onAddNew(){
        const newBug = this.bugOperations.createNew(this.newBugName);
        //this.bugs.push(newBug);
        this.bugs = [...this.bugs, newBug];
    } 
    */

    //subscription to the 'bugAdded' event of the BugEdit component (refer to the template for usage)
    onNewBugAdded(newBug : Bug){
        this.bugs = [...this.bugs, newBug];
    }

    

    //TO BE FIXED
    getClosedCount() : number {
        console.log('getClosedCount triggered');
        //return this.bugs.filter(bug => bug.isClosed).length
        return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
    }
}