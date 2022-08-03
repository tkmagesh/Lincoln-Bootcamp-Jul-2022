import { Injectable } from "@angular/core";
import { UrlSegment } from "@angular/router";

@Injectable({
    providedIn :'root'
})
export class UserService{
    private _isLoggedIn = false;
    public urlAttempted : UrlSegment[] = [];
    
    public Login(){
        //authentication
        this._isLoggedIn = true;
    }

    get LoggedIn() : boolean {
        return this._isLoggedIn;
    }
}