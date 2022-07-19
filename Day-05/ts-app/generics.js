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
function find(list, predicateFn) {
    for (let val of list) {
        if (predicateFn(val)) {
            return val;
        }
    }
    return undefined;
}
//write a type-safe generic filter function
function filter(list, predicateFn) {
    let result = [];
    for (let val of list) {
        if (predicateFn(val)) {
            result.push(val);
        }
    }
    return result;
}
//handling multiple types
function map(sourceList, transformationFn) {
    let result = [];
    for (let val of sourceList) {
        let transformedVal = transformationFn(val);
        result.push(transformedVal);
    }
    return result;
}
// type constraint
function print(x, y) {
    console.log(x, y);
}
console.log(print(10, 20));
console.log(print('pen', 'Pencil'));
function sortByComparer(list, comparer) {
    for (let i = 0; i < list.length - 1; i++)
        for (let j = i + 1; j < list.length; j++) {
            if (comparer(list[i], list[j]) > 0) {
                [list[i], list[j]] = [list[j], list[i]];
            }
        }
}
/* function sortByAttr(list , attrName ) {
    for (let i = 0; i < list.length-1; i++)
        for (let j = i + 1; j < list.length; j++){
            if (list[i][attrName] > list[j][attrName]) {
                [list[i], list[j]] = [list[j], list[i]]
            }
        }
} */
//products = [] { id, name, cost}
//sortByAttr(products, 'id')
//sortByAttr(products, 'name')
//sortByAttr(products, 'cost')
//sortByAttr(products, 'category')
function sortByAttr(list, attrName) {
    for (let i = 0; i < list.length - 1; i++)
        for (let j = i + 1; j < list.length; j++) {
            if (list[i][attrName] > list[j][attrName]) {
                [list[i], list[j]] = [list[j], list[i]];
            }
        }
}
let products = [
    { id: 6, name: 'Pen', cost: 50, units: 20, category: 'stationary' },
    { id: 9, name: 'Ten', cost: 70, units: 70, category: 'stationary' },
    { id: 3, name: 'Len', cost: 60, units: 60, category: 'grocery' },
    { id: 5, name: 'Zen', cost: 30, units: 30, category: 'grocery' },
    { id: 1, name: 'Ken', cost: 20, units: 80, category: 'utencil' },
    { id: 7, name: 'Mouse', cost: 100, units: 20, category: 'electronics' }
];
