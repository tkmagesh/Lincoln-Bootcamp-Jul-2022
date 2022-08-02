import { Injectable } from "@angular/core";
import { Bug } from "../models/bug.model";

@Injectable({
    providedIn : 'root'
})
export class BugStorageService{
    private storage : Storage = window.localStorage;
    private _currentBugId : number = 0;

    getAll() : Bug[] {
        let bugs : Bug[] = [];
        for (let idx = 0; idx < this.storage.length; idx++){
            let key = this.storage.key(idx);
            if (key?.startsWith('bug-')){
                let rawStr = this.storage.getItem(key);
                if (rawStr) {
                    let bug = JSON.parse(rawStr);
                    this._currentBugId = this._currentBugId > bug.id ? this._currentBugId : bug.id;
                    bugs.push(bug);
                }
            }
        }
        return bugs;
    }

    remove(bug : Bug){
        this.storage.removeItem(`bug-${bug.id}`)
    }

    save(bug : Bug){
        if (bug.id === 0) { /* new bug */
            bug.id = ++this._currentBugId;
        }
        this.storage.setItem(`bug-${bug.id}`, JSON.stringify(bug))
    }
}