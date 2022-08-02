import { Injectable } from "@angular/core";
import { Bug } from "../models/bug.model";
import { BugApiService } from "./bugApi.service";

@Injectable({
    providedIn : 'root'
})
export class BugOperationsService{
    
    public bugs : Bug[] = [];

    constructor( private bugApi : BugApiService) {

    }

    getAll() {
        this.bugApi
            .getAll()
            .subscribe(bugs => this.bugs = bugs);
    }

    createNew(newBugName : string) {
        const newBugData : Bug = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        }
        this.bugApi
            .save(newBugData)
            .subscribe(newBug => {
                this.bugs = [...this.bugs, newBug];
            });
            
    }

    toggle(bugToToggle : Bug){
        let toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed } ;
        this.bugApi
            .save(toggledBugData)
            .subscribe(toggledBug => {
                this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
            });
    }

    remove(bugToRemove : Bug){
        this.bugApi
            .remove(bugToRemove)
            .subscribe(() => {
                this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
            });
    }

    removeClosed(){
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.remove(closedBug))
    }

}