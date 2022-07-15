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

console.log(len(10))
console.log(len('A string'))

//void
function doSomething() : void {
    console.log('doing something')
}
doSomething()

