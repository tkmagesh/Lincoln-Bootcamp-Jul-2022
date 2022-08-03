import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "./user.service";

@Component({
    selector : 'app-login',
    templateUrl : 'login.component.html'
})
export class LoginComponent{
    constructor(private userService : UserService, private router : Router){

    }

    loginClick(){
        this.userService.Login()
        //this.router.navigate(this.userService.urlAttempted)
        this.router.navigate(['/spinner'])
    }
}