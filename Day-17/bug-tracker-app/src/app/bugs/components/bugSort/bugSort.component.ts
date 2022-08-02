import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector : 'app-bug-sort',
    templateUrl : 'bugSort.component.html',
    styleUrls : ['bugSort.component.css']
})
export class BugSortComponent{

    @Output()
    public sortAttrChange : EventEmitter<string> = new EventEmitter<string>()
    
    @Output()
    public sortOrderChange : EventEmitter<boolean> = new EventEmitter<boolean>()

    onSortAttrChange(attrName : string){
        this.sortAttrChange.emit(attrName);
    }

    onSortOrderChange(desc : boolean){
        this.sortOrderChange.emit(desc);
    }
    
}