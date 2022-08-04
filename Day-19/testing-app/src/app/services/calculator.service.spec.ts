
import { CalculatorService } from "./calculator.service";

describe('Calculator Service', () => {

  let calculatorService : CalculatorService;

  beforeEach(() => {
    calculatorService = new CalculatorService();
  });

  describe('When adding numbers', () => {
    it('should return the sum of the given numbers', () => {
      //Arrange
        const n1 = 100,
        n2 = 200,
        expectedResult = 300;

      //Act
      const actualResult = calculatorService.add(n1, n2);

      //Assert
      expect(actualResult).toBe(expectedResult);
    })
  })

  describe('When dividing numbers', () => {
    it('should return the result if the divisor is a non zero value', () => {
      //Arrange
      const n1 = 100,
        n2 = 5,
        expectedResult = 20;

      //Act
      const actualResult = calculatorService.divide(n1, n2);

      //Assert
      expect(actualResult).toBe(expectedResult);
    })

    it('should throw an error if the divisor is zero', () => {
      //Arrange
      const n1 = 100,
        n2 = 0;
        
      //Act
      const divideOperation = () => calculatorService.divide(n1, n2);

      //Assert
      expect(divideOperation).toThrowError();
    })
  })
})

/* 
import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
*/