const { concat, of, BehaviorSubject } = require('rxjs');
const { delay } =require('rxjs/operators')

const httpRequest$ = new BehaviorSubject();

const firstObs$ = of('btn click').pipe(delay(2000));

concat(firstObs$, httpRequest$).subscribe(val => {
    console.log(val);
})

setTimeout(() => {
    httpRequest$.next('Response from server');
}, 1000)