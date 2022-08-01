const { from } = require('rxjs')
const { map } = require('rxjs/operators')

let observable$ = from([1,2,3,4,5]);
let mappedObservable$ = observable$.pipe(
    map(no => 2 * no)
)
mappedObservable$.subscribe(no => console.log(no))