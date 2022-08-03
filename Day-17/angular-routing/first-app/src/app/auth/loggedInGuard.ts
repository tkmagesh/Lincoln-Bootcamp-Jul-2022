import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

@Injectable({
    providedIn : 'root'
})
export class LoggedInGuard implements CanActivate{
    constructor(private userService : UserService, private router : Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        if (this.userService.LoggedIn){
            return true;
        }
        this.router.navigate(['/login'], { queryParams : { returnUrl : state.url}})
        return false;
    }
}