import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CalculatorService } from "../calculator-app/calculator.service";


@Component({
    selector : 'app-calculator',
    templateUrl : 'calculator.component.html'
})
export class CalculatorComponent{
    
    n1 : number = 0;
    n2 : number = 0;

    constructor(
        private router : Router
    ){

    }
    /* 
    onDummyClick(event : Event){
        console.log((event.target as HTMLButtonElement).innerText)
    } 
    */

    onAddClick(){

        //this.router.navigate(['calculator-result'])

        //this.router.navigateByUrl('calculator-result/add')
        this.router.navigate(['calculator-result', 'add'], { queryParams : { n1 : 100, n2 : 200}})
    }

    onSubtractClick(){        
        this.router.navigate(['calculator-result'])
    }

    onMultiplyClick(){
        this.router.navigate(['calculator-result'])
    }

    onDivideClick(){
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