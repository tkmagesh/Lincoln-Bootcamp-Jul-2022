

const { Observable } = require('rxjs')
const { throttleTime } = require('rxjs/operators')

const observable$ = new Observable(observer => {
    setTimeout(() => observer.next('r'), 20)
    setTimeout(() => observer.next('x'), 30)
    setTimeout(() => observer.next('j'), 50)
    setTimeout(() => observer.next('s1'), 100) //=>
    setTimeout(() => observer.next(' '), 200)
    setTimeout(() => observer.next('i'), 220)
    setTimeout(() => observer.next('s2'), 230) //=>
    setTimeout(() => observer.next(' '), 290)
    setTimeout(() => observer.next('a'), 300)
    setTimeout(() => observer.next('w'), 310)
    setTimeout(() => observer.next('e1'), 320)
    setTimeout(() => observer.next('s3'), 320)
    setTimeout(() => observer.next('o'), 360) 
    setTimeout(() => observer.next('m'), 370)
    setTimeout(() => observer.next('e2'), 380)
})

observable$
    .pipe(throttleTime(20))
    .subscribe(console.log)