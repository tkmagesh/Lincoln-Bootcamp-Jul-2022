
//ES5
/* 
function add(){
    function parseArg(n){
        if (Array.isArray(n)) return add.apply(this, n) // array 'n' is converted as an argument list to the add function
        if (typeof n === 'function') return parseArg(n());
        return isNaN(n) ? 0 : parseInt(n);
    }
    return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add(Array.prototype.slice.call(arguments,1))
}
*/

//ES6
function add(first, ...rest){
    function parseArg(n){
        if (Array.isArray(n)) return add(...n);
        if (typeof n === 'function') return parseArg(n());
        return isNaN(n) ? 0 : parseInt(n);
    }
    return rest.length === 0 ? parseArg(first) : parseArg(first) + add(rest)
}

module.exports = add;

