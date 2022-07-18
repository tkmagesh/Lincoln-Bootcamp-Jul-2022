

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

class Rectangle{
    constructor(public height : number, public width : number){

    }
}

let box : Rectangle = new Rectangle(10, 11)
console.log(box.height)





