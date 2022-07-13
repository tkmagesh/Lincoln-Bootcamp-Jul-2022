
var products = [
	{id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	{id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'},
	{id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	{id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'},
	{id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'},
    {id : 7, name : 'Mouse', cost : 100, units : 20, category : 'electronics'}
];

/* 
    Collection Utility Functions
        - sort
            any list by any attribute
            in ascending order (default)
            in descending order

        - filter
            products by category (stationary or grocery or utencil)
            costly products (cost > 50)
            understocked products (units < 50)

        - forEach
        - map
        - group

    IMPORTANT:
        DO NOT USE the builtin Array Methods
*/

console.group('Initial List')
console.table(products)
console.groupEnd()

console.group('Sorting')
console.group('Products By Id')
function sortProductsById(){
    /* sorting the products by Id */

}
sortProductsById()
console.table(products)
console.groupEnd()

console.group('Generic Sort')
function sort(/* ...... */){

}
console.group('Products By Name')
//sorting
console.table(products)
console.groupEnd()
console.group('Products By Cost')
//sorting
console.table(products)
console.groupEnd()
console.groupEnd()
console.groupEnd()
/* 
console.group('Filter')
console.group('Costly Products [cost > 1000 ]')
//filtering
console.table(products)
console.groupEnd()
console.group('Understocked products [units < 50 ]')
//filtering
console.table(products)
console.groupEnd()
console.groupEnd() */