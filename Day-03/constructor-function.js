function Product(id, name, cost){
    //this => new object
    this['id'] = id;
    this['name'] = name;
    this['cost'] = cost;
    //this => returned by default
}

var pen = new Product(100, 'Pen', 10)

pen instanceof Product //=> true


function Product(id, name, cost){
    //this => new object
    if (!(this instanceof Product)){
        return new Product(id, name, cost)
    }
    this['id'] = id;
    this['name'] = name;
    this['cost'] = cost;
    //this => returned by default
}