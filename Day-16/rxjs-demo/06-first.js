const { from } = require('rxjs')
const { first } = require('rxjs/operators')

from([1,2,3,4,5])
    .pipe(
        first()
    )
    .subscribe(no => console.log(no))

//using a predicate

from([1,2,3,4,5])
    .pipe(
        first(no => no % 3 === 0 /* predicate */)
    )
    .subscribe(no => console.log(no))