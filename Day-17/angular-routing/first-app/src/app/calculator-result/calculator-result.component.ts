import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CalculatorService } from "../calculator-app/calculator.service";


@Component({
    selector : 'app-calculator-result',
    templateUrl : 'calculator-result.component.html'
})
export class CalculatorResultComponent{

    result : number = 0;
    
    constructor(private router : ActivatedRoute){
        this.router.params.subscribe(params => {
            console.log(params);
        })
    }

   
}