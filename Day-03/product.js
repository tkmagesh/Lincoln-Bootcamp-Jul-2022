function Product(id, name, cost){
    //this => new object
    if (!(this instanceof Product)){
        return new Product(id, name, cost)
    }
    this['id'] = id;
    this['name'] = name;
    this['cost'] = cost;

    /* 
    this['print'] = function(){
        console.log(this.id, this.name, this.cost);
    } 
    */
    //this => returned by default


}

Product.prototype['print'] = function(){
    console.log(this.id, this.name, this.cost);
}