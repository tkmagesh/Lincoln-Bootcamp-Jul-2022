
function memoize(pureFn){
    var cache = {};

    return function(no){
        if (no in cache)
            return cache[no];

        console.log('processing ', no)
        cache[no] = pureFn(no)
        return cache[no]
    }
}

function checkPrime(no){
    for ( var i = 2; i <= (no/2); i++ ){
        if (no % i === 0)
            return false;
    }
    return true
}

var isPrime = memoize(checkPrime)


function checkOddOrEven(no){
    return no % 2 === 0 ? 'even' : 'odd';
}
var isOddOrEven = memoize(checkOddOrEven);
  
//Modify the memoize function to make this work
function add(x,y){
    return x + y;
}

var memoizedAdd = memoize(add)

