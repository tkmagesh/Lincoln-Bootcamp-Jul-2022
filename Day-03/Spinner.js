function Spinner(){
    //private
    var counter = 0;

    //public
    this['up'] = function(){
        return ++counter;
    };

    this['down'] = function(){
        return --counter;
    };

}

//Usage:
var spinner = new Spinner();

