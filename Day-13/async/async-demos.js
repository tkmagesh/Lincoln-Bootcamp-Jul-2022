(function(){
    //synchronous
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        let result = x + y
        console.log(`   [@service] returning result`);
        return result;
    }

    function addSyncClient(){
        console.log(`[@client] invoking the service`)
        let result = addSync(100,200)
        console.log(`[@client] result = ${result}`)
    }

    window['addSyncClient'] = addSyncClient;

    //asynchronous (callback)
    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(function(){
            let result = x + y
            console.log(`   [@service] returning result`);
            callback(result);
        }, 5000);
    }

    function addAsyncClient(){
        console.log(`[@client] invoking the service`)
        addAsync(100,200, function(result){
            console.log(`[@client] result = ${result}`)
        })
    }

    window['addAsyncClient'] = addAsyncClient;

    //asynchronous (promise)
    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        let p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                let result = x + y
                console.log(`   [@service] returning result`);
                resolveFn(result);
            }, 5000);
        });
        return p;
    }

    function addAsyncPromiseClient(){
        console.log(`[@client] invoking the service`)
        var p = addAsyncPromise(100,200)
        var p2 = p.then(function(result){
            console.log('[@client] result = ', result);
            return result * 2;
        });
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;

    function divideAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        let p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                if (y === 0){
                    return rejectFn(new Error('cannot divide by zero'))
                }
                let result = x + y
                console.log(`   [@service] returning result`);
                resolveFn(result);
            }, 5000);
        });
        return p;
    }

    function divideAsyncPromiseClient(){
        divideAsyncPromise(100,7)
        .then(result => console.log(`result = ${result}`))
        .catch(err => console.log('Error : ', err))
    }

    window['divideAsyncPromiseClient'] = divideAsyncPromiseClient;

})();
//Promise Chaining
/* 
var p = addAsyncPromise(100,200)
var p2 = p.then(function(result){
    console.log('result = ', result);
    return result * 2;
});
var p3 = p2.then(function(doubleResult){
    console.log('doubleResult = ', doubleResult);
    return 'something';
})
p3.then(function(x){
    console.log('x = ', x);
})
*/
/* 
addAsyncPromise(100,200)
    .then(function(result){
        console.log('result = ', result);
        return result * 2;
    })
    .then(function(doubleResult){
        console.log('doubleResult = ', doubleResult);
        return 'something';
    })
    .then(function(x){
        console.log('x = ', x);
    }) 
*/