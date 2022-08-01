
const { from } = require('rxjs')
const { distinctUntilChanged } = require('rxjs/operators')

const observable$ = from([1,1,1,2,3])

observable$
    .pipe(distinctUntilChanged())
    .subscribe(console.log)