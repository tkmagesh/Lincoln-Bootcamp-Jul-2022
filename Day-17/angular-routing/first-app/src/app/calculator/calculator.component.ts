import { Component } from "@angular/core";


@Component({
    selector : 'app-calculator',
    templateUrl : 'calculator.component.html'
})
export class CalculatorComponent{
    result : number = 0;
    n1 : number = 0;
    n2 : number = 0;

    /* 
    onDummyClick(event : Event){
        console.log((event.target as HTMLButtonElement).innerText)
    } 
    */

    onAddClick(){
        this.result = this.n1 + this.n2
    }

    onSubtractClick(){
        this.result = this.n1 - this.n2
    }

    onMultiplyClick(){
        this.result = this.n1 * this.n2
    }

    onDivideClick(){
        this.result = this.n1 / this.n2
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