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
//console.log(len(10))
console.log(len('A string'));
//void
function doSomething() {
    console.log('doing something');
}
doSomething();
//Day-06
//Enum //collection of named values
/*
red = 1
green = 2
blue = 3
*/
/*
const RED = 1
const GREEN = 2
const BLUE = 3

let pen = { name : 'Pen', color : RED}
*/
/* enum ProductColors {
    RED , // => 0
    GREEN , //=> 1
    BLUE //=> 2
} */
/*
enum ProductColors {
    RED = 11,
    GREEN = 12,
    BLUE = 13
}
*/
var ProductColors;
(function (ProductColors) {
    ProductColors["RED"] = "RED";
    ProductColors["GREEN"] = "GREEN";
    ProductColors["BLUE"] = "BLUE";
})(ProductColors || (ProductColors = {}));
//let pen  = { name : 'Pen', color : ProductColors.RED}
let pen = { name: 'Pen', color: ProductColors.RED };
if (pen.color === ProductColors.RED) {
    console.log('Pen color is RED');
}
else {
    console.log('Not a red pen');
}
let pencil;
pencil = { name: 'Pencil', color: ProductColors.GREEN };
//pencil = { id : 100, name : 'Dummy Product', cost : 10} 
function printProduct(product) {
    console.log(`Name = ${product.name}, Color = ${product.color}`);
}
printProduct(pencil);
let emp = { id: 100, name: 'Magesh', city: 'Bangalore' };
let addOperation = (x, y) => x + y;
let multiplyOperation = (x, y) => x * y; //type inference
let calc = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
};
