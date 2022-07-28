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

    async remove(bugToRemove : Bug){
        await this.bugApi.remove(bugToRemove)
        this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
    }

    removeClosed(){
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.remove(closedBug))
    }

}