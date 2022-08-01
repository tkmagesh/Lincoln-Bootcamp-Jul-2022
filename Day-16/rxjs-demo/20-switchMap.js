
const { Subject, interval} = require('rxjs');
const { switchMap, filter } = require('rxjs/operators')

const timer$ = interval(1000)

const switch$ = new Subject()

const subscription = switch$
    .pipe(
        filter(toggle => toggle),
        switchMap(toggle => timer$)
    )
    .subscribe(time => console.log('ms passed:' + time))

//Simulation
setTimeout(() => switch$.next(true), 5000)
setTimeout(() => switch$.next(false), 7000)
//setTimeout(() => console.log('---------'), 5500)

setTimeout(() => switch$.next(true), 10000)
setTimeout(() => switch$.next(false), 12000)

//setTimeout(() => switch$.next(true), 1000)
setTimeout(() => subscription.unsubscribe(), 25000)