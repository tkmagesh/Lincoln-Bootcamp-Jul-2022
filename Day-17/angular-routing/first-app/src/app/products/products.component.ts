import { Component } from "@angular/core";

@Component({
    selector : 'app-products',
    templateUrl : 'products.component.html'
})
export class ProductsComponent {
    products : string[] = [];

    onAdd(newProductName : string){
        this.products.push(newProductName)
    }

    onRemove(productToRemove : string){
        this.products.splice(this.products.indexOf(productToRemove), 1)
    }
}