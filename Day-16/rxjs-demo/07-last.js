const { from } = require('rxjs')
const { last } = require('rxjs/operators')

from([1,2,3,4,5])
    .pipe(
        last()
    )
    .subscribe(no => console.log(no))

//using a predicate

from([1,2,3,4,5,6,7,8])
    .pipe(
        last(no => no % 3 === 0 /* predicate */)
    )
    .subscribe(no => console.log(no))