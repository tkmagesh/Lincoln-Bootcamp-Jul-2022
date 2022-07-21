import { Component } from "@angular/core";


@Component({
    selector : 'app-calculator-2',
    templateUrl : 'calculator-2.component.html'
})
export class Calculator2Component{

    result : number = 0;
    n1 : number = 0;
    n2 : number = 0;
    operation : string = '';

    onCalculateClick(){
        switch (this.operation) {
            case 'add':
                this.result = this.n1 + this.n2;
                break;
            case 'subtract':
                this.result = this.n1 - this.n2;
                break;
            case 'multiply':
                this.result = this.n1 * this.n2;
                break;
            case 'divide':
                this.result = this.n1 / this.n2;
                break;
        
            default:
                break;
        }
    }

}