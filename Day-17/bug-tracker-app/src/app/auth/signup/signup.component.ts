import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { passwordValidator } from "./password.validator";

@Component({
    selector : 'app-signup',
    templateUrl : 'signup.component.html',
    styleUrls : ['signup.component.css']
})
export class SignupComponent{

    signupForm : FormGroup;

    constructor(){
        this.signupForm = new FormGroup({
            userName : new FormControl('', [
                Validators.required
            ]),
            password : new FormControl('', [
                Validators.required
            ]),
            confirmPassword : new FormControl('', [
                Validators.required
            ])
        }, passwordValidator )
    }
}