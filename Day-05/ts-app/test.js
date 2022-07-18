"use strict";
var _Employee_salary;
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
    result: 0,
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiply: (x, y) => x * y,
    divide: (x, y) => x / y,
};
//Classes
class Employee {
    constructor(id, name, city) {
        this._id = 0;
        this._name = '';
        this.city = '';
        _Employee_salary.set(this, 0);
        this.id = id;
        this.name = name;
        this.city = city;
    }
    set id(val) {
        console.log('id (set) invoked');
        if (val <= 0) {
            throw new Error('id cannot be zero or negative value');
        }
        this._id = val;
    }
    get id() {
        console.log('id (get) invoked');
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(val) {
        if (val === '') {
            throw new Error('Name cannot be empty');
        }
        this._name = val;
    }
    display() {
        console.log(`id = ${this._id}, name = ${this.name}, city = ${this.city}`);
    }
}
_Employee_salary = new WeakMap();
let newEmp = new Employee(100, 'Magesh', 'Bangalore');
newEmp.display();
//newEmp.id = -200 // => throws an error
newEmp.id = 200;
console.log(newEmp.id);
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
    perimeter() {
        return 2 * (this.height + this.width);
    }
}
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return (22 / 7) * this.radius * this.radius;
    }
    perimeter() {
        return 2 * (22 / 7) * this.radius;
    }
}
function printStats(obj) {
    console.log("Area = ", obj.area());
    console.log("Perimiter = ", obj.perimeter());
}
let box = new Rectangle(10, 11);
/*
console.log("Area = ", box.area())
console.log("Perimiter = ", box.perimeter())
*/
printStats(box);
let circle = new Circle(12);
/*
console.log("Area = ", circle.area())
console.log("Perimiter = ", circle.perimeter())
*/
printStats(circle);
