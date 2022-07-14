

var radio = (function(){
    
    var topics = {}

    function radio(topicName){
        topics[topicName] = topics[topicName] || new Topic(topicName);
        return topics[topicName];
    }

    class Topic{
        name = ''
        __subscriptions = []
        
        constructor(topicName){
            this.name = topicName;
        }

        subscribe(fn){
            this.__subscriptions.push(fn);
            return this;
        }

        broadcast(...args){
            for (let fn of this.__subscriptions)
                fn(...args)
            return this;
        }

        unsubscribe(fn){
            var subscriptions = this.__subscriptions;
            var idx = subscriptions.indexOf(fn);
            subscriptions.splice(idx, 1)
            return this;
        }
    }
    return radio;
})();


function productRemoved(){
        console.log('product removed');
    }
radio('product-removed')
    .subscribe(productRemoved)
    .broadcast()
    .unsubscribe(productRemove)