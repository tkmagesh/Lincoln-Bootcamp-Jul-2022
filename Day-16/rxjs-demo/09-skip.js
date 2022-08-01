const { from } = require('rxjs')
const { take, skip } = require('rxjs/operators')

from([1,2,3,4,5])
    .pipe(
        take(3),
        skip(2)
    )
    .subscribe(no => console.log(no))

