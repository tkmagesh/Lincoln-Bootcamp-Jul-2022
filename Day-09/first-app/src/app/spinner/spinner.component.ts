import { Component } from "@angular/core";


@Component({
    selector : 'app-spinner',
    templateUrl : 'spinner.component.html'
})
export class SpinnerComponent {

    counter = 100;

    onDecrement(){
        this.counter--
    }

    onIncrement(){
        this.counter++
    }
}   