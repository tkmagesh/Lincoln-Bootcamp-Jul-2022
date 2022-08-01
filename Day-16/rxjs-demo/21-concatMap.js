const { Subject } = require('rxjs');
const { concatMap, filter } = require('rxjs/operators');

// The subject that will be used to publish data events
const dataStream$ = new Subject()

// The subject that will be used as a switch
const switch$ = new Subject();

// Subscribe to inner observable using concatMap
const subscription = switch$.pipe(
    filter(toggle => toggle),
    concatMap(toggle => dataStream$)
).subscribe(time => console.log('data received: ' + time))

setTimeout(() => switch$.next(true), 1000);
setTimeout(() => dataStream$.next(1), 2000);
setTimeout(() => switch$.next(false), 4000);


setTimeout(() => {
    dataStream$.next(2);
    dataStream$.complete()
}, 8000);

setTimeout(() => subscription.unsubscribe(), 10000);