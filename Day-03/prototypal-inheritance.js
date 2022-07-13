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

console.log(typeof Product.prototype)

console.log(Product.prototype.__proto__ === Object.prototype)

var pen = new Product(100, 'Pen', 10)

console.log(pen.__proto__ === Product.prototype)

var productBase = Product.prototype

console.log(productBase.__proto__ === Object.prototype)

Object.prototype['type'] = 'root Object'


console.log(Product.prototype.type)

console.log(pen.type)

var pencil = new Product(200, 'Pencil', 5)

console.log(pencil.type )

Product.prototype.type = 'Product Object'

console.log(pen.type)

console.log(pencil.type)
