const { interval } = require('rxjs')

//let interval$ = interval(1000);
//let subscription = interval$.subscribe(no => console.log('next : ', no));

let interval$ = myInterval(1000);
let unsubscribe = interval$.subscribe(no => console.log('next : ', no));

//unsubscribing after 20 seconds
setTimeout(() => {
    unsubscribe();
}, 20000);


function myInterval(duration){
    return new Observable((subscribe = (subscribedOberver) => {
        let counter = 0;
        let timerId;
        try {
            timerId = setInterval(() => {
                subscribedOberver.next(++counter)
            }, duration);
        } catch (err) {
            subscribedOberver.error(err);
        }
        return function unsubscribe(){
            clearInterval(timerId)
        }
    }))
}
