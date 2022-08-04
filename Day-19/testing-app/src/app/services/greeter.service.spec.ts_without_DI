
import { GreeterService } from "./greeter.service";
import { DatetimeService } from './datetime.service';

describe('Greeter Service', () => {
  let greeterService : GreeterService;
  let datetimeService : DatetimeService;
  beforeEach(() => {
     /* datetimeService = {
      getCurrent() : Date {
        return new Date();
      }
    } */
    datetimeService = new DatetimeService();
    greeterService = new GreeterService(datetimeService);
  });

  it('should greet the user with Good Morning when greeted before 12', () => {
    //Arrange
    const morningDate = new Date(2022,7,4,9,0,0);
    spyOn(datetimeService, 'getCurrent').and.returnValue(morningDate)
    
    const userName = 'Magesh',
      expectedResult = 'Hi Magesh, Good Morning!'

    //Act
    const actualResult : string = greeterService.greet(userName);

    //Assert
    expect(actualResult).toBe(expectedResult);
  });

  it('should greet the user with Good Afternoon when greeted after 12', () => {
    //Arrange
    const afternoonDate = new Date(2022,7,4,13,0,0);
    spyOn(datetimeService, 'getCurrent').and.returnValue(afternoonDate)
    
    const userName = 'Magesh',
      expectedResult = 'Hi Magesh, Good Afternoon!'

    //Act
    const actualResult : string = greeterService.greet(userName);

    //Assert
    expect(actualResult).toBe(expectedResult);
  })
})

/* 
import { TestBed } from '@angular/core/testing';

import { GreeterService } from './greeter.service';

describe('GreeterService', () => {
  let service: GreeterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreeterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
 */