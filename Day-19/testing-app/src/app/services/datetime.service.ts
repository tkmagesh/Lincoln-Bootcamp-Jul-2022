import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {
  getCurrent(): Date {
    return new Date()
  }

  constructor() { }
}
