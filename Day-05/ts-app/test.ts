

console.log("Hi there");

let no : number = 10;

function add(x : number, y : number) : number {
    return x + y
}

let x : any
x = 10
x = "string"
x = true
x = {}
x = []

let y;

//any
function greet(name : any){
    console.log('Hi there!')
}

greet('Magesh')

//type inferrence
let a = 10;
let result = add(100,200)

//unknown
function len(no : unknown) : number {
    
    if (typeof no === 'string')
        return no.length; 
    if (no instanceof Array)
        return no.length
    throw new Error('arg:no has no length attribute');
   
   //return no.length;
}

//console.log(len(10))
console.log(len('A string'))

//void
function doSomething() : void {
    console.log('doing something')
}
doSomething()


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

enum ProductColors {
    RED = 'RED',
    GREEN = 'GREEN',
    BLUE = 'BLUE'
}

//let pen  = { name : 'Pen', color : ProductColors.RED}
let pen  = { name : 'Pen', color : ProductColors.RED}

if (pen.color === ProductColors.RED){
    console.log('Pen color is RED')
} else {
    console.log('Not a red pen')
}

//interfaces (contracts)

/* 
// type inference
let pencil = {name : 'Pencil', color : ProductColors.GREEN}
*/

/* let pencil : { name : string, color : ProductColors} = { name : 'Pencil', color : ProductColors.GREEN} */


interface Product {
    name : string,
    color : ProductColors
}

let pencil : Product

pencil = {name : 'Pencil', color : ProductColors.GREEN}
//pencil = { id : 100, name : 'Dummy Product', cost : 10} 

function printProduct(product : Product){
    console.log(`Name = ${product.name}, Color = ${product.color}`)
}

printProduct(pencil)

let emp = { id : 100, name : 'Magesh', city : 'Bangalore'}
//printProduct(emp)


//function contract as interface
interface MathOperation{
    (x : number, y : number) : number
}

let addOperation : MathOperation = (x : number, y : number) : number => x + y;
let multiplyOperation : MathOperation = (x,y) => x * y  //type inference

//
interface MathCalculator {
    result : number,
    add : MathOperation,
    subtract : MathOperation,
    multiply :MathOperation,
    divide : MathOperation
}

let calc : MathCalculator = {
    result : 0,
    add : (x,y) => x + y,
    subtract : (x,y) => x - y,
    multiply : (x,y) => x * y,
    divide : (x,y) => x / y,
}

//Classes
class Employee{
    private _id : number = 0;
    private _name : string = '';

    readonly city : string = ''
    #salary : number = 0;

    set id(val : number){
        console.log('id (set) invoked')
        if (val <= 0){
            throw new Error('id cannot be zero or negative value')
        }
        this._id = val;
    }

    get id() : number {
        console.log('id (get) invoked')
        return this._id;
    }

    public get name() : string {
        return this._name
    }

    private set name (val : string){
        if (val === ''){
            throw new Error('Name cannot be empty')
        }
        this._name = val;
    }

    constructor(id : number, name : string, city : string){
        this.id = id;
        this.name = name;
        this.city = city;
    }

    display(){
        console.log(`id = ${this._id}, name = ${this.name}, city = ${this.city}`)
    }
}

let newEmp : Employee = new Employee(100, 'Magesh', 'Bangalore')
newEmp.display()
//newEmp.id = -200 // => throws an error
newEmp.id = 200
console.log(newEmp.id)


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

abstract class ShapeBase implements Shape{
    
    constructor(public name : string){

    }

    abstract area(): number;
    abstract perimeter(): number;

}

interface Shape{
    area() : number,
    perimeter() : number
}

class Rectangle extends ShapeBase  {

    //static field
    static shapeName : string = "rectangle";

    constructor(name : string, public height : number, public width : number){
        super(name)
    }

    //static method
    static From(dimensions : number[]) : Rectangle{
        return new Rectangle(Rectangle.shapeName, dimensions[0], dimensions[1])
    }

    area() : number {
        return this.height * this.width;
    }

    perimeter() : number {
        return 2 * (this.height + this.width)
    }

}

class Circle extends ShapeBase {

    // static field
    static shapeName :string = "circle";

    constructor(name : string, public radius : number){
        super(name)
    }

    //static method
    static From(r : number) : Circle {
        return new Circle(Circle.shapeName, r)
    }

    area() : number {
        return (22/7) * this.radius * this.radius 
    }

    perimeter() : number {
        return 2 * (22/7) * this.radius
    }
}



function printStats(obj : ShapeBase){
    console.log('Name = ', obj.name)
    //let objAsShape = (obj as unknown) as Shape;
    console.log("Area = ", obj.area())
    console.log("Perimiter = ", obj.perimeter()) 
}

let box : Rectangle = new Rectangle("rectangle", 10, 11)
/* 
console.log("Area = ", box.area())
console.log("Perimiter = ", box.perimeter()) 
*/

printStats(box);

let circle : Circle = new Circle("circle", 12)
/* 
console.log("Area = ", circle.area())
console.log("Perimiter = ", circle.perimeter()) 
*/

printStats(circle)

//static members
    // => members that are accessible with the 'class' reference (not with the instance)

let r1 = Rectangle.From([10, 20])
printStats(r1)

let c1 = Circle.From(10)
printStats(c1)


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

class MyList<T>{
    private collection : T[] = [];

    public add(no : T) : void {
        this.collection.push(no);
    }

    public get values() : T[] {
        return [...this.collection]
    }

    public pop() : T | undefined {
        return this.collection.pop()
    }

    //filter?
    public filter(predicate : (t : T) => boolean) : MyList<T> {
        let result = new MyList<T>
        for (let item of this.collection){
            if (predicate(item)){
                result.add(item)
            }
        }
        return result
    }
} 

let numList = new MyList<number>()
numList.add(10)

interface Book { 
    id : number, 
    title : string, 
    isbn : string, 
    cost : number
}

let books = new MyList<Book>()
books.add({id : 1, title : 'Angular', isbn : '34723198474', cost : 59.99})
books.add({id : 2, title : 'React', isbn : '34682649789', cost : 49.99})
books.add({id : 3, title : 'TypeScript', isbn : '809038388', cost : 29.99})

let cheapBooks = books.filter(book => book.cost < 50)
console.log(cheapBooks.values)

