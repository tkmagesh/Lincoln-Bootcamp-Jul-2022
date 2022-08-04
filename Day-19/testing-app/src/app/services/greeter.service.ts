import { Injectable } from '@angular/core';
import { DatetimeService } from './datetime.service';

@Injectable({
  providedIn: 'root'
})
export class GreeterService {

  constructor(private datetimeService : DatetimeService){

  }

  greet(userName: string): string {
    const currentDate : Date = this.datetimeService.getCurrent();
    if (currentDate.getHours() < 12){
      return `Hi ${userName}, Good Morning!`;
    } else {
      return `Hi ${userName}, Good Afternoon!`;
    }
  }

  
}
