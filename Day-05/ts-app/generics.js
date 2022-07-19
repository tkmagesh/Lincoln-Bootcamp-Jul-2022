"use strict";
let list = new Array();
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
class List {
    constructor() {
        this.list = new Array();
    }
    push(no) {
        this.list.push(no);
    }
    pop() {
        return this.list.pop();
    }
}
let numberList = new List(); //=> restricted only to handle numbers
let stringList = new List(); //=> restricted only to handle strings
let nos = new Array();
/*
function addItem<T>(list : T[], item : T) : T[] {
    return [...list, item]
}
*/
//the above function implementation as an arrow function
const addItem = (list, item) => ([...list, item]);
let nums = [10, 20, 30];
/*
let newNums = addItem<number>(nums, 40)
newNums = addItem<number>(newNums, 'something' ) //=> should not be allowed
*/
//generic inference
let newNums = addItem(nums, 40);
//newNums = addItem(newNums, 'something' ) //=> should not be allowed
console.log(newNums);
let productNames = ['Pen', 'Pencil', 'Marker'];
let newProductNames = addItem(productNames, 'Scribble-Pad');
//newProductNames = addItem(newProductNames, 1000) //should not be allowed
console.log(newProductNames);
//write a type-safe generic "find" function that will return the first item that satisfies the given criteria (predicate)
