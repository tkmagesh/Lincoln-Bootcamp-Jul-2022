import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { zip } from "rxjs";
import { CalculatorService } from "../calculator-app/calculator.service";


@Component({
    selector : 'app-calculator-result',
    templateUrl : 'calculator-result.component.html'
})
export class CalculatorResultComponent{

    result : number = 0;
    
    constructor(private router : ActivatedRoute){
        zip(this.router.params, this.router.queryParams)
            .subscribe( ([params, queryParams]) => {
                const operation = params['operation']
                const n1 = parseInt(queryParams['n1']),
                    n2 = parseInt(queryParams['n2']);
                switch (operation) {
                    case 'add':
                        this.result = n1 + n2
                        break;
                    case 'subtract':
                        this.result = n1 - n2
                        break;
                    case 'multiply':
                        this.result = n1 * n2
                        break;
                    case 'divide':
                        this.result = n1 / n2
                        break;
                
                    default:
                        break;
                }
            })
        /* this.router.params.subscribe(params => {
            const operation = params['operation']
            this.router.queryParams.subscribe(queryParams => {
                const n1 = parseInt(queryParams['n1']),
                    n2 = parseInt(queryParams['n2']);
                switch (operation) {
                    case 'add':
                        this.result = n1 + n2
                        break;
                    case 'subtract':
                        this.result = n1 - n2
                        break;
                    case 'multiply':
                        this.result = n1 * n2
                        break;
                    case 'divide':
                        this.result = n1 / n2
                        break;
                
                    default:
                        break;
                }
            })
        }); */
        
    }

   
}