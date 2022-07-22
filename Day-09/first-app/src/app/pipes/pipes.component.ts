import { Component } from "@angular/core";

@Component({
    selector : 'app-pipes',
    templateUrl : 'pipes.component.html'
})
export class PipesComponent{
    currentDate = new Date()

    product = { id : 100, name : 'Pen', cost : 10}

    products : string[] = [];

    constructor(){
        for (let i = 1; i <= 100; i++)
            this.products.push(`Product - ${i}`)
    }
}