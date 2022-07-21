import { Component } from "@angular/core";


@Component({
    selector : 'app-calculator',
    templateUrl : 'calculator.component.html'
})
export class CalculatorComponent{
    result : number = 0;
    n1 : string = "";
    n2 : string = "";

    onAddClick(){
        this.result = parseInt(this.n1) + parseInt(this.n2)
    }

    onSubtractClick(){
        this.result = parseInt(this.n1) - parseInt(this.n2)
    }

    onMultiplyClick(){
        this.result = parseInt(this.n1) * parseInt(this.n2)
    }

    onDivideClick(){
        this.result = parseInt(this.n1) / parseInt(this.n2)
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