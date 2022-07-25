import { Component } from "@angular/core";
import { SalaryCalculatorModel } from "./salaryCalculator.model";

@Component({
    selector : 'app-salary-calculator',
    templateUrl : 'salaryCalculator.component.html',
    styleUrls : ['salaryCalculator.component.css']
})
export class SalaryCalculatorComponent{

    //model : SalaryCalculatorModel = new SalaryCalculatorModel();

    /* 
    model : SalaryCalculatorModel;

    constructor(model : SalaryCalculatorModel){
        this.model = model;
    } 
    */
    
    constructor(public model : SalaryCalculatorModel){
        
    }
}