const { from } = require('rxjs')
const { take } = require('rxjs/operators')

from([1,2,3,4,5])
    .pipe(
        take(3)
    )
    .subscribe(no => console.log(no))

