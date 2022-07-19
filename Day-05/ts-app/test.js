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
/*
class Rectangle{
    public height : number = 0;
    public width : number = 0;

    constructor(height : number, width : number){
        this.height = height;
        this.width = width;
    }
}
*/
class ShapeBase {
    constructor(name) {
        this.name = name;
    }
}
class Rectangle extends ShapeBase {
    constructor(name, height, width) {
        super(name);
        this.height = height;
        this.width = width;
    }
    //static method
    static From(dimensions) {
        return new Rectangle(Rectangle.shapeName, dimensions[0], dimensions[1]);
    }
    area() {
        return this.height * this.width;
    }
    perimeter() {
        return 2 * (this.height + this.width);
    }
}
//static field
Rectangle.shapeName = "rectangle";
class Circle extends ShapeBase {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    //static method
    static From(r) {
        return new Circle(Circle.shapeName, r);
    }
    area() {
        return (22 / 7) * this.radius * this.radius;
    }
    perimeter() {
        return 2 * (22 / 7) * this.radius;
    }
}
// static field
Circle.shapeName = "circle";
function printStats(obj) {
    console.log('Name = ', obj.name);
    //let objAsShape = (obj as unknown) as Shape;
    console.log("Area = ", obj.area());
    console.log("Perimiter = ", obj.perimeter());
}
let box = new Rectangle("rectangle", 10, 11);
/*
console.log("Area = ", box.area())
console.log("Perimiter = ", box.perimeter())
*/
printStats(box);
let circle = new Circle("circle", 12);
/*
console.log("Area = ", circle.area())
console.log("Perimiter = ", circle.perimeter())
*/
printStats(circle);
//static members
// => members that are accessible with the 'class' reference (not with the instance)
let r1 = Rectangle.From([10, 20]);
printStats(r1);
let c1 = Circle.From(10);
printStats(c1);
//Generic
//let list : number[] = [];
/* class NumberList{
    private collection : number[] = [];

    public add(no : number) : void {
        this.collection.push(no);
    }

    public get values() : number[] {
        return [...this.collection]
    }

    public pop() : number | undefined {
        return this.collection.pop()
    }
}

let numList : NumberList = new NumberList()
numList.add(10)
numList.add(20)
numList.add(30)
console.log("numList values = ", numList.values)

class StringList{
    private collection : string[] = [];

    public add(no : string) : void {
        this.collection.push(no);
    }

    public get values() : string[] {
        return [...this.collection]
    }

    public pop() : string | undefined {
        return this.collection.pop()
    }
} */
/*
class MyList{
    private collection : any[] = [];

    public add(no : any) : void {
        this.collection.push(no);
    }

    public get values() : any[] {
        return [...this.collection]
    }

    public pop() : any | undefined {
        return this.collection.pop()
    }
}
*/
class MyList {
    constructor() {
        //private collection : T[] = [];
        this.collection = new Array();
    }
    add(no) {
        this.collection.push(no);
    }
    get values() {
        return [...this.collection];
    }
    pop() {
        return this.collection.pop();
    }
    //filter?
    filter(predicate) {
        let result = new MyList;
        for (let item of this.collection) {
            if (predicate(item)) {
                result.add(item);
            }
        }
        return result;
    }
    //sort?
    sort(comparer) {
        for (var i = 0; i < this.collection.length - 1; i++) {
            for (var j = i + 1; j < this.collection.length; j++) {
                if (comparer(this.collection[i], this.collection[j]) > 0) {
                    var temp = this.collection[i];
                    this.collection[i] = this.collection[j];
                    this.collection[j] = temp;
                }
            }
        }
    }
    //forEach?
    forEach(fn) {
        for (let item of this.collection) {
            fn(item);
        }
    }
    //map
    map(transformationFn) {
        var result = new MyList();
        for (var i = 0; i < this.collection.length; i++) {
            var item = this.collection[i];
            var transformedItem = transformationFn(item);
            result.add(transformedItem);
        }
        return result;
    }
    group(keySelectorFn) {
        var _a;
        var result = new Map();
        for (var i = 0; i < this.collection.length; i++) {
            var item = this.collection[i], key = keySelectorFn(item);
            if (!result.has(key))
                result.set(key, []);
            (_a = result.get(key)) === null || _a === void 0 ? void 0 : _a.push(item);
        }
        return result;
    }
}
let numList = new MyList();
numList.add(10);
let books = new MyList();
books.add({ id: 1, title: 'Angular', isbn: '34723198474', cost: 59.99, subject: "FrontEnd" });
books.add({ id: 2, title: 'React', isbn: '34682649789', cost: 49.99, subject: "FrontEnd" });
books.add({ id: 3, title: 'TypeScript', isbn: '809038388', cost: 29.99, subject: "FrontEnd" });
books.add({ id: 4, title: 'Nodejs', isbn: '809038388', cost: 29.99, subject: "Backend" });
let cheapBooks = books.filter(book => book.cost < 50);
console.log(cheapBooks.values);
let discountedBooks = books.map(book => ({ title: book.title, cost: book.cost * 0.9 }));
console.log("Discounted Books");
console.log(discountedBooks);
let titles = books.map(book => book.title);
let booksBySubject = books.group(book => book.subject);
console.log(booksBySubject);
