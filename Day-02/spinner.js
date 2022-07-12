//NO HTML / DOM

/* 
var spinner = (function(){
    var counter = 0;

    function up(){
        return ++counter;
    }

    function down(){
        return --counter;
    }

    var spinner = {
        up : up,
        down : down
    }

    return spinner;
})() 
*/

var spinner = (function(){
    var counter = 0;
    return {
        up :  function up(){
            return ++counter;
        },
        down : function down(){
            return --counter;
        }
    };
})()


/* 
    spinner methods
        - up() 
        - down()

    spinner.up() //=> 1
    spinner.up() //=> 2
    spinner.up() //=> 3
    spinner.up() //=> 4

    spinner.down() //=> 3    
    spinner.down() //=> 2
    spinner.down() //=> 1
    spinner.down() //=> 0
    spinner.down() //=> -1


    IMPORTANT:
        the outcome of the spinner operations SHOULD NOT be able to be influenced from outside:

        The following SHOULD NOT be possible
        spinner.counter = 10000
        spinner.up() //=> SHOULD NOT return 10001

        OR

        window.counter = 10000
        spinner.up() //=> SHOULD NOT return 10001

*/

function add(x,y){
    return x + y
}

var emp = {
    whoAmI : function(){

    }
}