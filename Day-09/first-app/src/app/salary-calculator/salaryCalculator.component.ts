import { Component } from "@angular/core";
import { SalaryCalculatorModel } from "./salaryCalculator.model";

@Component({
    selector : 'app-salary-calculator',
    templateUrl : 'salaryCalculator.component.html',
    styleUrls : ['salaryCalculator.component.css'],
    providers : [
        SalaryCalculatorModel //each component instance will get its own instance of the SalaryCalculatorModel
    ]
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