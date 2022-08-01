
const { interval, Subject } = require('rxjs')
const { skipUntil, takeUntil } = require('rxjs/operators')

/* 
const interval$ = interval(500);

const startSubject = new Subject();

setTimeout(() => {
    startSubject.next('start');
}, 2000);

const subscriber = interval$
    .pipe(skipUntil(startSubject))
    .subscribe(no => console.log('no : ', no))

setTimeout(() => {
    subscriber.unsubscribe();
}, 5000); 
*/

const interval$ = interval(500);

const startSubject = new Subject();
const stopSubject = new Subject();

setTimeout(() => {
    startSubject.next('start');
}, 2000);

interval$
    .pipe(skipUntil(startSubject))
    .pipe(takeUntil(stopSubject))
    .subscribe(no => console.log('no : ', no))

setTimeout(() => {
    stopSubject.next('stop')
}, 5000);