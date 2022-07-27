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

})();