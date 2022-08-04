import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {
  getCurrent(): Date {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
