

var radio = (function(){
    
    var topics = {}

    function radio(topicName){
        topics[topicName] = topics[topicName] || new Topic(topicName);
        return topics[topicName];
    }

    function Topic(topicName){
        this.name = topicName;
        this.__subscriptions = [];
    }

    Topic.prototype.subscribe = function(fn){
        this.__subscriptions.push(fn);
        return this;
    }

    Topic.prototype.broadcast = function(){
        var subscriptions = this.__subscriptions;
        for (var i = 0; i < subscriptions.length; i++){
            var fn = subscriptions[i];
            fn();
        }
        return this;
    }

    Topic.prototype.unsubscribe = function(fn){
        var subscriptions = this.__subscriptions;
        var idx = subscriptions.indexOf(fn);
        subscriptions.splice(idx, 1)
        return this;
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