import { Injectable } from "@angular/core";


@Injectable({
    providedIn : 'root'
})
export class SalaryCalculatorModel{
    basic : number = 0;
    hra : number = 0;
    da : number = 0;
    tax : number = 0;
    salary : number = 0;

    calculate(){
        let gross = this.basic + this.hra + this.da,
            net = gross * ((100-this.tax)/100);
        this.salary = net;
    }
}