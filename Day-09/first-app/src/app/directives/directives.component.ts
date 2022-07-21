import { Component } from "@angular/core";


@Component({
    selector : 'app-directives',
    templateUrl : 'directives.component.html',
    styleUrls : ['directives.component.css']
})
export class DirectivesComponent{
    applyStyle : boolean = false;
    show : boolean = false;
    
    classNames =  ['first', 'second', 'third', 'fourth'];
}