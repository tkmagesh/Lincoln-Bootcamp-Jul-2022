import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  n1 : number = 0;
  n2 : number = 0;
  result : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onAddClick(){
    this.result = this.n1 + this.n2;
  }
}
