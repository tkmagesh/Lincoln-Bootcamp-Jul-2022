import { Injectable } from "@angular/core";
import { Bug } from "../models/bug.model";
import { BugStorageService } from "./bugStorage.service";


@Injectable({
    providedIn : 'root'
})
export class BugOperationsService{
    
    constructor(private bugStorage : BugStorageService){

    }

    getAll() : Bug[] {
        return this.bugStorage.getAll();
    }

    createNew(newBugName : string) : Bug {
        const newBug : Bug = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        }
        this.bugStorage.save(newBug);
        return newBug;
    }

    toggle(bugToToggle : Bug){
        bugToToggle.isClosed = !bugToToggle.isClosed;
        this.bugStorage.save(bugToToggle);
    }

    remove(bugToRemove : Bug){
        this.bugStorage.remove(bugToRemove);
    }

}