
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
            Transformation
                [v1, v2, v3, v4] => [t1, t2, t3, t4]

                transformationFn(v) => t

            map(list, transformationFn) //=> [t1, t2, t3, t4]

            Use case:
                Create a new list of products with the 10% discount applied on the cost
        - group

            Use Case 1: Grouping the products by category
            Outcome
                {
                    "stationary" : [
                        {id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	                    {id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'}
                    ],
                    "grocery" : [
                        {id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	                    {id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'}
                    ],
                    "utencil" : [
                        {id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'}
                    ],
                    "electronics" : [
                        {id : 7, name : 'Mouse', cost : 100, units : 20, category : 'electronics'}
                    ]

                }

            Use case 2: Group products by cost (costly / affordable)
            Outcome
                {
                    "costly" : [

                    ],
                    "affordable" : [

                    ]
                }
            
                 Use case 3: Group products by units (understocked / wellstocked)
            Outcome
                {
                    "understocked" : [

                    ],
                    "wellstocked" : [
                        
                    ]
                }


    IMPORTANT:
        DO NOT USE the builtin Array Methods
*/

function describe(title, fn){
    console.group(title)
       fn()
    console.groupEnd()
}

describe('Initial List', () => {
    console.table(products)
});

describe('Sorting', () => {
    describe('Products By Id', () => {
        function sortProductsById(){
            for (var i=0; i<products.length-1; i++){
                for(var j=i+1; j < products.length; j++){
                    if (products[i].id > products[j].id){
                       [products[i], products[j]] = [products[j], products[i]]
                    }
                }
            }
        }
        sortProductsById()
        console.table(products)
    })

    describe('Generic Sort', function(){
        function sort(list, comparer){
            var comparerFn = null;
            if (!comparer) return;
            if (typeof comparer === 'function'){
                comparerFn = comparer;
            }
            if (typeof comparer === 'string' /* by attrName */){
                comparerFn = function(o1, o2){
                    if (o1[comparer] < o2[comparer]) return -1;
                    if (o1[comparer] > o2[comparer]) return 1;
                    return 0;
                }
            }
            if (!comparerFn) return;
            for (var i=0; i<list.length-1; i++){
                for(var j=i+1; j < list.length; j++){
                    if (comparerFn(list[i], list[j]) > 0){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp
                    }
                }
            }
        }
        describe('By attribute name', function(){
            /* function sort(list, attrName){
                for (var i=0; i<list.length-1; i++){
                    for(var j=i+1; j < list.length; j++){
                        if (list[i][attrName] > list[j][attrName]){
                            var temp = list[i];
                            list[i] = list[j];
                            list[j] = temp
                        }
                    }
                }
            } */
            describe('Products By Name', function(){
                sort(products, 'name')
                console.table(products)
            })
            describe('Products By Cost', function(){
                sort(products, 'cost')
                console.table(products)
            })
        })
        describe('By any comparer', function(){
            /* function sort(list, comparerFn){
                for (var i=0; i<list.length-1; i++){
                    for(var j=i+1; j < list.length; j++){
                        if (comparerFn(list[i], list[j]) > 0){
                            var temp = list[i];
                            list[i] = list[j];
                            list[j] = temp
                        }
                    }
                }
            } */
            describe('Products By Value (value = cost * units)', function(){
                var productsComparerByValue = function(p1, p2){
                    var p1Value = p1.cost * p1.units,
                        p2Value = p2.cost * p2.units;
                    if (p1Value < p2Value) return -1;
                    if (p1Value > p2Value) return 1;
                    return 0;
                }
                sort(products, productsComparerByValue);
                console.table(products)
            })
           
        })
    })
})

describe('Filter', function(){
    describe('filter stationary products', function(){
        function filterStationaryProducts(){
            var result = [];
            for(let product of products){
                if (product.category === 'stationary')
                    result.push(product);
            }
            return result;
        }
        var stationaryProducts = filterStationaryProducts()
        console.table(stationaryProducts)
    })
    describe('any list by any criteria', function(){
        function filter(list, predicate){
            var result = [];
            for (let item of list){
                if (predicate(item)){
                    result.push(item)
                }
            }
            return result;
        }
        function negate(predicate){
            return function(...args){
                return !predicate(...args)
            }
        }
        describe('Products by cost', function(){
            /* var costlyProductPredicate = function(product){
                return product.cost > 50;
            }; */
            var costlyProductPredicate = product => product.cost > 50;
            
            describe('Costly Products [cost > 50 ]', function(){
                var costlyProducts = filter(products, costlyProductPredicate);
                console.table(costlyProducts);
            });

            describe('Affordable Products (!costly products)', function(){
                /* var affordableProductPredicate = function(product){
                    return !costlyProductPredicate(product);
                } */
                var affordableProductPredicate = negate(costlyProductPredicate);
                var affordableProducts = filter(products, affordableProductPredicate)
                console.table(affordableProducts);
            });
        })
        describe('Products by units', function(){
             var understockedProductPredicate = function(product){
                return product.units < 50;
            }
            describe('Understocked products [units < 50 ]', function(){
                var understockedProducts = filter(products, understockedProductPredicate);
                console.table(understockedProducts)
            });

            describe('Wellstocked products (!understocked products)', function(){
                /* var wellstockedProductPredicate = function(product){
                    return !understockedProductPredicate(product);
                } */
                var wellstockedProductPredicate = negate(understockedProductPredicate);
                var wellstockedProducts = filter(products, wellstockedProductPredicate);
                console.table(wellstockedProducts);
            })

        });

    });
});

describe('forEach', function(){
    function forEach(list, fn){
         for (var i = 0; i < products.length; i++){
            var product = products[i];
            fn(product)
        }
    }
    describe('Print Name and Value', function(){
        /* for (var i = 0; i < products.length; i++){
            var product = products[i];
            console.log(product.name, product.cost * product.units)
        } */
        forEach(products, function(product){
            console.log(product.name, product.cost * product.units)
        });
    })
    describe('Print Name and Category', function(){
        /* for (var i = 0; i < products.length; i++){
            var product = products[i];
            console.log(product.name, product.category)
        } */
        forEach(products, function(product){
            console.log(product.name, product.category)
        });
    })
})

describe('map', function(){
    function map(list, transformationFn){
        var result = [];
        for (var i = 0; i < list.length; i++){
            var item = list[i];
            var transformedItem = transformationFn(item);
            result.push(transformedItem)
        }
        return result;
    }

    describe('Products with 10% discount', function(){
        function transformProductWithDiscount(product){
            return {
                id : product.id,
                name : product.name,
                cost : product.cost * 0.9,
                units : product.units,
                category : product.category
            }
        }
        var productsWithDiscount = map(products, transformProductWithDiscount);
        console.table(productsWithDiscount);
    });
});

/* 
    - group

            Use Case 1: Grouping the products by category
            Outcome
                {
                    "stationary" : [
                        {id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	                    {id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'}
                    ],
                    "grocery" : [
                        {id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	                    {id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'}
                    ],
                    "utencil" : [
                        {id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'}
                    ],
                    "electronics" : [
                        {id : 7, name : 'Mouse', cost : 100, units : 20, category : 'electronics'}
                    ]

                }

            Use case 2: Group products by cost (costly / affordable)
            Outcome
                {
                    "costly" : [

                    ],
                    "affordable" : [

                    ]
                }
            
                 Use case 3: Group products by units (understocked / wellstocked)
            Outcome
                {
                    "understocked" : [

                    ],
                    "wellstocked" : [
                        
                    ]
                }

*/
describe("group", function(){
    describe("grouping products by category", function(){
        function groupProductsByCategory(){
            var result = {};
            for (var i = 0; i < products.length; i++){
                var product = products[i],
                    category = product.category;
                if (!(category in result)){
                    result[category] = [];
                }
                result[category].push(product)
            }
            return result;
        }
        var productsByCategory = groupProductsByCategory();
        console.log(productsByCategory);
    })
    describe('grouping any list by any key', function(){
        function group(list, keySelectorFn){
            var result = {};
            for (var i = 0; i < list.length; i++){
                var item = list[i],
                    key = keySelectorFn(item);
                result[key] = result[key] || [];
                result[key].push(item);
            }
            return result;
        }
        describe('products by category', function(){
            var productsByCategory = group(products, function(product){
                return product.category;
            })
            console.log(productsByCategory)

        })
        describe('products by cost (costly / affordable)', function(){
            var productsByCost = group(products, function(product){
                return product.cost <= 50 ? 'affordable' : 'costly'; 
            });
            console.log(productsByCost);
        })

         describe('products by units (understocked / wellstocked)', function(){
            var productsByUnits = group(products, function(product){
                return product.units < 50 ? 'understocked' : 'wellstocked'
            })
            console.log(productsByUnits);
        })
    })
})