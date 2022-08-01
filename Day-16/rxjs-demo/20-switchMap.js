const { Subject, interval } = require('rxjs');
const { switchMap, filter } = require('rxjs/operators');

// A timer observable that emits every 1sec
const timer$ = interval(1000)

// The subject that will be used a switch
const switch$ = new Subject();

// Emit timer data only when the switch is on
const subscription = switch$.pipe(
    filter(toggle => toggle),
    switchMap(toggle => timer$)
).subscribe(time => console.log('ms passed: ' + time))


// Simulation
setTimeout(() => switch$.next(true), 1000);
setTimeout(() => switch$.next(false), 4000);
setTimeout(() => console.log('-------'), 5500);

setTimeout(() => switch$.next(true), 6000);

setTimeout(() => switch$.next(false), 7000);

setTimeout(() => subscription.unsubscribe(), 10000);
