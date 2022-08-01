

const { Observable } = require('rxjs')
const { debounceTime } = require('rxjs/operators')

const observable$ = new Observable(observer => {
    setTimeout(() => observer.next('r'), 20)
    setTimeout(() => observer.next('x'), 30)
    setTimeout(() => observer.next('j'), 50)
    setTimeout(() => observer.next('s'), 100) //=>
    setTimeout(() => observer.next(' '), 200)
    setTimeout(() => observer.next('i'), 220)
    setTimeout(() => observer.next('s'), 230) //=>
    setTimeout(() => observer.next(' '), 290)
    setTimeout(() => observer.next('a'), 300)
    setTimeout(() => observer.next('w'), 310)
    setTimeout(() => observer.next('e1'), 320)
    setTimeout(() => observer.next('s'), 320)
    setTimeout(() => observer.next('o'), 360) 
    setTimeout(() => observer.next('m'), 370)
    setTimeout(() => observer.next('e2'), 380)
})

observable$
    .pipe(debounceTime(50))
    .subscribe(console.log)