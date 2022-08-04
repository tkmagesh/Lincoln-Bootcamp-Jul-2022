import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  divide(n1: number, n2: number) : number {
    if (n2 === 0){
      throw new Error('Cannot divide by zero!')
    }
    return n1 / n2;
  }

  add(n1: number, n2: number) : number {
    return n1 + n2;
  }

  constructor() { }
}
