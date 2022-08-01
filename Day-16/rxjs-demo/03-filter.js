const { from } = require('rxjs')
const { filter } = require('rxjs/operators')

let observable$ = from([1,2,3,4,5]);
let filteredObservable$ = observable$.pipe(
    filter(no => no % 2 === 0)
)
filteredObservable$.subscribe(no => console.log(no))