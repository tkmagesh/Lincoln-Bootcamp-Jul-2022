//NO HTML / DOM

var spinner = /* create the spinner object based on the below specification  */

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