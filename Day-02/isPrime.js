
var isPrime = (function(){
    var cache = {};

    return function(no){
        if (no in cache)
            return cache[no];

        console.log('processing ', no)
        cache[no] = true;
        for ( var i = 2; i <= (no/2); i++ ){
            if (no % i === 0)
                cache[no] = false;
                break;
        }
        return cache[no];
    }
})();