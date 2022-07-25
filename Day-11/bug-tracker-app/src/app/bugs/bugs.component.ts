import { Component } from "@angular/core";
import { Bug } from "./models/bug.model";

@Component({
    selector : 'app-bugs',
    templateUrl : 'bugs.component.html',
    styleUrls : ['bugs.component.css']
})
export class BugsComponent{

    private _currentBugId : number = 0;

    bugs : Bug[] = [];

    onAddNew(newBugName : string){
        const newBug : Bug = {
            id : ++this._currentBugId,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        }
        this.bugs.push(newBug);
    }

    onRemove(bugToRemove : Bug){
        this.bugs.splice(this.bugs.indexOf(bugToRemove), 1)
    }

    onToggle(bugToToggle : Bug){
        bugToToggle.isClosed = !bugToToggle.isClosed;
    }

    onRemoveClosed(){
        for (let index = this.bugs.length-1 ; index >= 0; index--){
            if (this.bugs[index].isClosed){
                this.bugs.splice(index, 1);
            }
        }
    }

    //TO BE FIXED
    getClosedCount() : number {
        //return this.bugs.filter(bug => bug.isClosed).length
        return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
    }
}