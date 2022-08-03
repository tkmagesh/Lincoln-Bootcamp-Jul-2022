import { Component } from "@angular/core";
import { CalculatorService } from "../calculator-app/calculator.service";


@Component({
    selector : 'app-calculator-result',
    templateUrl : 'calculator-result.component.html'
})
export class CalculatorResultComponent{

    result : number = 0;

    constructor(public calculatorService : CalculatorService){
        this.calculatorService
            .operation$
            .subscribe(operationData => {
                this.performOperation(operationData)
            })
    }

    performOperation(operationData : {n1 : number, n2 : number, operation: string}){
        switch (operationData.operation) {
            case 'add':
                this.result = operationData.n1 + operationData.n2
                break;
             case 'subtract':
                this.result = operationData.n1 - operationData.n2
                break;
             case 'multiply':
                this.result = operationData.n1 * operationData.n2
                break;
             case 'divide':
                this.result = operationData.n1 / operationData.n2
                break;
        
            default:
                break;
        }
    }
}