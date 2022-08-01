const { Subject, of } = require('rxjs');
const { mergeMap, delay } = require('rxjs/operators');

// Simulation for server interaction
const publishToServer$ = of("Demo Data").pipe(delay(100));

// The subject that will be used as a switch
const switch$ = new Subject();

// Use mergeMap to have multiple active inner subscriptions
const subscription = switch$.pipe(
    mergeMap(toggle => publishToServer$)
).subscribe(time => console.log('data sent: ' + time))


// The simulation
setTimeout(() => switch$.next(true), 1000);
setTimeout(() => switch$.next(false), 4000);

setTimeout(() => switch$.next(true), 8000);

setTimeout(() => subscription.unsubscribe(), 10000);