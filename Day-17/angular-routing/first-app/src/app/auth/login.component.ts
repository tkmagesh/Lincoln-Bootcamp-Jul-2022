import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "./user.service";

@Component({
    selector : 'app-login',
    templateUrl : 'login.component.html'
})
export class LoginComponent{
    constructor(private userService : UserService, private router : Router, private route : ActivatedRoute){

    }

    loginClick(){
        this.userService.Login()
        this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl'])
    }
}