"use strict";
console.log("Hi there");
let no = 10;
function add(x, y) {
    return x + y;
}
let x;
x = 10;
x = "string";
x = true;
x = {};
x = [];
let y;
//any
function greet(name) {
    console.log('Hi there!');
}
greet('Magesh');
//type inferrence
let a = 10;
let result = add(100, 200);
//unknown
function len(no) {
    if (typeof no === 'string')
        return no.length;
    if (no instanceof Array)
        return no.length;
    throw new Error('arg:no has no length attribute');
    //return no.length;
}
console.log(len(10));
console.log(len('A string'));
//void
function doSomething() {
    console.log('doing something');
}
doSomething();
