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

    constructor(
        private bugStorage : BugStorageService,
        private bugApi : BugApiService
    ){

    }

    getAll() {
        //this.bugs = this.bugStorage.getAll();
        /* 
        axios.get<Bug[]>('http://localhost:3000/bugs')
            .then(response => response.data)
            .then(bugs => this.bugs = bugs); 
            */
        this.bugApi
            .getAll()
            .then(bugs => this.bugs = bugs);
    }

    createNew(newBugName : string) {
        const newBugData : Bug = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        }
        //this.bugStorage.save(newBug);
        //refactor the following to the bugApi service
        axios.post('http://localhost:3000/bugs', newBugData)
            .then(response => response.data)
            .then(newBug => {
                this.bugs = [...this.bugs, newBug]
            });
    }

    toggle(bugToToggle : Bug){
        let toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed } ;
        //this.bugStorage.save(toggledBug);
        //refactor the following to the bugApi service
        axios.put(`http://localhost:3000/bugs/${toggledBugData.id}`, toggledBugData)
            .then(response => response.data)
            .then(toggledBug => {
                this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
            })
        
    }

    remove(bugToRemove : Bug){
        //this.bugStorage.remove(bugToRemove);
        //refactor the following to the bugApi service
        axios
            .delete(`http://localhost:3000/bugs/${bugToRemove.id}`)
            .then( () => {
                this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
            });
        
    }

    removeClosed(){
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(closedBug => this.remove(closedBug))
    }

}