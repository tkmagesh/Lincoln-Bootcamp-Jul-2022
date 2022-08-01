const { concat, of, Subject } = require('rxjs');
const { delay } =require('rxjs/operators')

const httpRequest$ = new Subject();

const firstObs$ = of('btn click').pipe(delay(2000));

concat(firstObs$, httpRequest$).subscribe(val => {
    console.log(val);
})

setTimeout(() => {
    httpRequest$.next('Response from server');
}, 3000)