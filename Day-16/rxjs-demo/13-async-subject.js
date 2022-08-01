
const { AsyncSubject } = require('rxjs');

const asyncSubject = new AsyncSubject();

asyncSubject.subscribe(val => {
    console.log('value received : ', val)
});

asyncSubject.next('first value')
asyncSubject.next('second value')
console.log('sent 2 values to the subject')
asyncSubject.complete();