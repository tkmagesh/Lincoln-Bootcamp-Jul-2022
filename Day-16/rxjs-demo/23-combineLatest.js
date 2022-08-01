const { combineLatest, Subject } = require('rxjs');

const subject1 = new Subject();
const subject2 = new Subject();
const subject3 = new Subject();

combineLatest([subject1, subject2, subject3]).subscribe(val => {
    console.log(val);
})

setTimeout(() => {
    subject1.next(1);
}, 500)

setTimeout(() => {
    subject2.next(2);
}, 500)

setTimeout(() => {
    subject3.next(3);
}, 700)


setTimeout(() => {
    subject3.next('3 again');
}, 1200)

setTimeout(() => {
    subject2.next('2 again');
}, 1500)

setTimeout(() => {
    subject1.next('1 again');
}, 1500)

