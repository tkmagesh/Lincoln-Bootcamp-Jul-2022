import { Injectable } from "@angular/core";
import { Bug } from "../models/bug.model";
import { BugStorageService } from "./bugStorage.service";
import axios from "axios";
import { BugApiService } from "./bugApi.service";

@Injectable({
    providedIn : 'root'
})
export class BugOperationsService{
    
    public bugs : Bug[] = [];

    constructor( private bugApi : BugApiService) {

    }

    async getAll() {
        this.bugs = await this.bugApi.getAll()
    }

    async createNew(newBugName : string) {
        const newBugData : Bug = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        }
        const newBug = await this.bugApi.save(newBugData)
        this.bugs = [...this.bugs, newBug];
            
    }

    async toggle(bugToToggle : Bug){
        let toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed } ;
        const toggledBug = await this.bugApi.save(toggledBugData)
        this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
    }

    remove(bugToRemove : Bug){
        //this.bugStorage.remove(bugToRemove);
        //refactor the following to the bugApi service
        this.bugApi
            .remove(bugToRemove)
            .then(() => {
                this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
            });
        
    }

    removeClosed(){
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.remove(closedBug))
    }

}