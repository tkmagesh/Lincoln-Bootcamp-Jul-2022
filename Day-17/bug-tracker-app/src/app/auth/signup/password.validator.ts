import { AbstractControl } from "@angular/forms";

export function passwordValidator(form : AbstractControl) : { [key : string] : boolean} | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password?.pristine || confirmPassword?.pristine){
        return null;
    }
    return password && confirmPassword && password.value !== confirmPassword.value ? { 'mismatch' : true } : null;
}