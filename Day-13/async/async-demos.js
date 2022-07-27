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

    //asynchronous
    function addAsync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(function(){
            let result = x + y
            console.log(`   [@service] returning result`);
            return result;
        }, 5000);
    }

    function addAsyncClient(){
        console.log(`[@client] invoking the service`)
        let result = addAsync(100,200)
        console.log(`[@client] result = ${result}`)
    }

    window['addAsyncClient'] = addAsyncClient;

})();