import { Component, EventEmitter, Output } from "@angular/core";
import { Bug } from "../../models/bug.model";
import { BugOperationsService } from "../../services/bugOperations.service";


@Component({
    selector : 'app-bug-edit',
    templateUrl : 'bugEdit.component.html',
    styleUrls : ['bugEdit.component.css']
})
export class BugEditComponent{

    newBugName : string = '';
    newBugDesc : string = '';
    //placeholder for all the even subscriptions from the parent component
    /* 
    @Output()
    public bugAdded : EventEmitter<Bug> = new EventEmitter<Bug>()
    */
    constructor(private bugOperations : BugOperationsService){

    }

    onAddNew(){

        this.bugOperations.createNew(this.newBugName);
        
        /* 
        const newBug = this.bugOperations.createNew(this.newBugName);

        //emitting the event (thereby calling all the subscribers with the data)
        this.bugAdded.emit(newBug); 
        */

        
    }

}