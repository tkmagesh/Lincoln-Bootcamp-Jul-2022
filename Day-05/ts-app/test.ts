

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
interface Calculator {
    add : MathOperation,
    subtract : MathOperation,
    multiply :MathOperation,
    divide : MathOperation
}

let calc : Calculator = {
    add : (x,y) => x + y,
    subtract : (x,y) => x - y,
    multiply : (x,y) => x * y,
    divide : (x,y) => x / y,
}
