import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class CalculatorService{
    public n1 : number = 0;
    public n2 : number = 0;
    public operation$ : BehaviorSubject<{n1 : number, n2 : number, operation: string}> = new BehaviorSubject({n1 : 0, n2 : 0, operation : ''})

    notifyOpetation(operation : string){
        this.operation$.next({
            n1 : this.n1,
            n2 : this.n2,
            operation : operation
        })
    }
}