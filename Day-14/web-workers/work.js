
function doWork(){
    for(var i=0; i < 10000; i++){
        for(var j=0; j < 5000; j++)
        for(var k=0; k < 1000; k++){

        }
        if (i % 100 === 0){
            var percentCompleted = i / 100;
            self.postMessage({
                type : 'progress',
                percentCompleted : percentCompleted
            });
        }
    }
}

self.addEventListener('message', evtArg => {
    console.log(evtArg);
    if (evtArg.data === 'start'){
        doWork();
        self.postMessage('completed');
    }
})