//importing the module object and assigning to the 'calc' variable
/* 
import * as calc from './calculator'
console.log(calc.add(100,200)) 
*/

/* 
import * as calc from './calculator'
const add = calc.add;
console.log(add(100,200)) 
*/

/* 
import * as calc from './calculator'
const { add } = calc;
console.log(add(100,200)) 
*/


/* 
import { add } from './calculator'
console.log(add(100,200))  
*/

//importing the default exported entity
/* 
import utilsObj from './calculator'
console.log(utilsObj) 
*/

//importing the module & default export
import utilsObj, {add} from './calculator'
console.log(utilsObj.isEven(21))
console.log(add(100,200))


