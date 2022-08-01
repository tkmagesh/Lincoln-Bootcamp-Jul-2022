
const { interval, Subject } = require('rxjs')
const { takeUntil } = require('rxjs/operators')

const interval$ = interval(500);

const stopSubject = new Subject();

setTimeout(() => {
    stopSubject.next('stop');
}, 5000);

interval$
    .pipe(takeUntil(stopSubject))
    .subscribe(no => console.log('no : ', no))