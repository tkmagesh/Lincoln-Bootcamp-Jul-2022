
/* 
    (+) privacy
    (-) inefficient use of memory

*/
/* 
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
*/

/* 
    (+) efficient use of memory
    (-) lack of privacy
*/
function Spinner(){
    //private
    this['$counter'] = 0;
}

//public
Spinner.prototype['up'] = function(){
    return ++this.$counter;
};

Spinner.prototype['down'] = function(){
    return --this.$counter;
};

//Usage:
var spinner = new Spinner();

