/* 
    Subject = Observable + Observer
*/

const { BehaviorSubject }= require('rxjs');

const dataSubject = new BehaviorSubject();

setTimeout(() => {
    dataSubject
        .subscribe(no => console.log('subscriber-1', no));
}, 1000);

setTimeout(() => {
    dataSubject
        .subscribe(no => console.log('subscriber-2', no));
}, 5000);

setTimeout(() => {
    dataSubject
        .subscribe(no => console.log('subscriber-3', no));
}, 10000);

setTimeout(() => {
    dataSubject.next(10); //subscriber-1
}, 2000);

setTimeout(() => {
    dataSubject.next(20); //subscriber-1 & subscriber-2
}, 6000);

setTimeout(() => {
    dataSubject.next(30); //subscriber-1, subscriber-2 & subscriber-3
}, 12000);