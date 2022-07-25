import { Injectable } from "@angular/core";
import { Bug } from "../models/bug.model";


@Injectable({
    providedIn : 'root'
})
export class BugOperationsService{
    private _currentBugId : number = 0;

    createNew(newBugName : string) : Bug {
        const newBug : Bug = {
            id : ++this._currentBugId,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        }
        return newBug;
    }
    toggle(bugToToggle : Bug){
        bugToToggle.isClosed = !bugToToggle.isClosed;
    }
}