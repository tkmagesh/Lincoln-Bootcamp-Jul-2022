
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

function describe(title, fn){
    console.group(title)
       fn()
    console.groupEnd()
}

describe('Initial List', function(){
    console.table(products)
});

describe('Sorting', function(){
    describe('Products By Id', function(){
        function sortProductsById(){
            for (var i=0; i<products.length-1; i++){
                for(var j=i+1; j < products.length; j++){
                    if (products[i].id > products[j].id){
                        var temp = products[i];
                        products[i] = products[j];
                        products[j] = temp
                    }
                }
            }
        }
        sortProductsById()
        console.table(products)
    })

    describe('Generic Sort', function(){
        function sort(list, attrName){
            for (var i=0; i<list.length-1; i++){
                for(var j=i+1; j < list.length; j++){
                    if (list[i][attrName] > list[j][attrName]){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp
                    }
                }
            }
        }
        describe('Products By Name', function(){
            sort(products, 'name')
            console.table(products)
        })
        describe('Products By Cost', function(){
            sort(products, 'cost')
            console.table(products)
        })
    })
})
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