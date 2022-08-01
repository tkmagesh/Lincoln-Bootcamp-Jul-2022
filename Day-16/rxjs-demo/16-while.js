
const { from } = require('rxjs')
const { takeWhile, skipWhile} = require('rxjs/operators')

const observable$ = from([0,0,0,1,0])

console.log('TakeWhile')
observable$
    .pipe(
        takeWhile(x => x < 1)
    )
    .subscribe(console.log)

console.log('SkipWhile')
observable$
    .pipe(
        skipWhile(x => x < 1)
    )
    .subscribe(console.log)

