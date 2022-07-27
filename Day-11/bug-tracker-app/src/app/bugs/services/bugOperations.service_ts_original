import { Injectable } from "@angular/core";
import { Bug } from "../models/bug.model";
import { BugStorageService } from "./bugStorage.service";


@Injectable({
    providedIn : 'root'
})
export class BugOperationsService{
    
    public bugs : Bug[] = [];

    constructor(private bugStorage : BugStorageService){

    }

    getAll() {
        this.bugs = this.bugStorage.getAll();
    }

    createNew(newBugName : string) {
        const newBug : Bug = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        }
        this.bugStorage.save(newBug);
        this.bugs = [...this.bugs, newBug]
    }

    toggle(bugToToggle : Bug){
        let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed } ;
        this.bugStorage.save(toggledBug);
        this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
    }

    remove(bugToRemove : Bug){
        this.bugStorage.remove(bugToRemove);
        this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
    }

    removeClosed(){
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.remove(closedBug))
    }

}