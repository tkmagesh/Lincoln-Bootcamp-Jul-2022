import { Component } from "@angular/core";
import { Product, ProductsService } from "./products.service";

@Component({
    selector : 'app-products',
    templateUrl : 'products.component.html'
})
export class ProductsComponent {
    
    constructor(public productsService : ProductsService){

    }

    onAdd(newProductName : string){
        this.productsService.addNew(newProductName)
    }

    onRemove(productToRemove : Product){
        this.productsService.remove(productToRemove)
    }
}