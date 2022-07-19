
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
function addItem(list : any, item : any) {
    return [...list, item]
}

let nums = [10,20,30]
let newNums = addItem(nums, 40)
newNums = addItem(newNums, 'something' ) //=> should not be allowed
console.log(newNums)

let productNames = ['Pen', 'Pencil', 'Marker']
let newProductNames = addItem(productNames, 'Scribble-Pad')
newProductNames = addItem(newProductNames, 1000) //should not be allowed
console.log(newProductNames)