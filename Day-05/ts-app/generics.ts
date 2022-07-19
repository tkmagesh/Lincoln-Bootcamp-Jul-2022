
let list = new Array()

/* class NumberList {
    private list = new Array()

    public push(no : number){
        this.list.push(no);
    }

    public pop() : number {
        return this.list.pop() as number;
    }
}

class StringList {
    private list = new Array()

    public push(no : string){
        this.list.push(no);
    }

    public pop() : string {
        return this.list.pop() as string;
    }
} */

class List<T> {
    private list = new Array()

    public push(no : T){
        this.list.push(no);
    }

    public pop() : T {
        return this.list.pop() as T;
    }
}

let numberList = new List<number>() //=> restricted only to handle numbers
let stringList = new List<string>() //=> restricted only to handle strings

let nos = new Array<number>()

//generic function
/* 
function addItem<T>(list : Array<T>, item : T) : Array<T> {
    return [...list, item]
} 
*/

type addItemFnType<T> = (list : T[], item : T) => T[] //type definition for addItem function

/* 
function addItem<T>(list : T[], item : T) : T[] {
    return [...list, item]
} 
*/


//the above function implementation as an arrow function
const addItem = <T>(list : T[], item:T) : T[] => ([...list, item])

let nums = [10,20,30]
/* 
let newNums = addItem<number>(nums, 40)
newNums = addItem<number>(newNums, 'something' ) //=> should not be allowed 
*/

//generic inference
let newNums = addItem(nums, 40)
//newNums = addItem(newNums, 'something' ) //=> should not be allowed
console.log(newNums)

let productNames = ['Pen', 'Pencil', 'Marker']
let newProductNames = addItem(productNames, 'Scribble-Pad')
//newProductNames = addItem(newProductNames, 1000) //should not be allowed
console.log(newProductNames)

//write a type-safe generic "find" function that will return the first item that satisfies the given criteria (predicate)

type predicate<T> = (item : T) => boolean

function find<T>(list : T[], predicateFn : predicate<T>) : T | undefined {
    for (let val of list){
        if (predicateFn(val)) {
            return val
        }
    }
    return undefined;
}

//write a type-safe generic filter function
function filter<T>(list : T[], predicateFn : predicate<T>) : T[] {
    let result : T[] = [];
    for (let val of list){
        if (predicateFn(val)) {
            result.push(val)
        }
    }
    return result;
}

//handling multiple types
function map(sourceList /*list of sourceType*/, transformationFn /* (sourceType) => targetType*/) /*targetList - list of targetType*/ {
    let result /* : targetType[] */ = [];
    for (let val of sourceList){
        let transformedVal = transformationFn(val);
        result.push(transformedVal);
    }
    return result
}


