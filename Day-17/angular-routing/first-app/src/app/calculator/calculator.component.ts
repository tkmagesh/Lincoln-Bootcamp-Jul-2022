import { Component } from "@angular/core";
import { CalculatorService } from "../calculator-app/calculator.service";


@Component({
    selector : 'app-calculator',
    templateUrl : 'calculator.component.html'
})
export class CalculatorComponent{
    

    constructor(public calculatorService : CalculatorService){

    }
    /* 
    onDummyClick(event : Event){
        console.log((event.target as HTMLButtonElement).innerText)
    } 
    */

    onAddClick(){
        this.calculatorService.notifyOpetation('add')
    }

    onSubtractClick(){
        this.calculatorService.notifyOpetation('subtract')
    }

    onMultiplyClick(){
        this.calculatorService.notifyOpetation('multiply')
    }

    onDivideClick(){
        this.calculatorService.notifyOpetation('divide')
    }
}


/* export class CalculatorComponent{
    result : number = 0;

    onAddClick(n1 : string, n2 : string){
        this.result = parseInt(n1) + parseInt(n2)
    }

    onSubtractClick(n1 : string, n2 : string){
        this.result = parseInt(n1) - parseInt(n2)
    }

    onMultiplyClick(n1 : string, n2 : string){
        this.result = parseInt(n1) * parseInt(n2)
    }

    onDivideClick(n1 : string, n2 : string){
        this.result = parseInt(n1) / parseInt(n2)
    }
} */