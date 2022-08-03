import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CalculatorService } from "../calculator-app/calculator.service";


@Component({
    selector : 'app-calculator',
    templateUrl : 'calculator.component.html'
})
export class CalculatorComponent{
    

    constructor(
        public calculatorService : CalculatorService,
        private router : Router
    ){

    }
    /* 
    onDummyClick(event : Event){
        console.log((event.target as HTMLButtonElement).innerText)
    } 
    */

    onAddClick(){
        this.calculatorService.notifyOpetation('add')
        this.router.navigate(['calculator-result'])
    }

    onSubtractClick(){
        this.calculatorService.notifyOpetation('subtract')
        this.router.navigate(['calculator-result'])
    }

    onMultiplyClick(){
        this.calculatorService.notifyOpetation('multiply')
        this.router.navigate(['calculator-result'])
    }

    onDivideClick(){
        this.calculatorService.notifyOpetation('divide')
        this.router.navigate(['calculator-result'])
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