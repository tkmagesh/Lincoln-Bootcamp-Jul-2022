const { interval } = require('rxjs')

let interval$ = interval(1000);
let subscription = interval$.subscribe(no => console.log('next : ', no));

//unsubscribing after 20 seconds
setTimeout(() => {
    subscription.unsubscribe();
}, 20000);


