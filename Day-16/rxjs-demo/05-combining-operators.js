const { from, interval } = require('rxjs')
const { filter, map } = require('rxjs/operators')

//let observable$ = from([1,2,3,4,5]);
let observable$ = interval(1000)
let data$ = observable$.pipe(
    filter(no => no % 2 === 0),
    map(no => 2 * no)
)
data$.subscribe(no => console.log(no))