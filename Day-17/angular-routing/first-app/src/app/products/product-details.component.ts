import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, ProductsService } from "./products.service";


@Component({
    selector : 'app-product-details',
    templateUrl : 'product-details.component.html'
})
export class ProductDetailsComponent{

    product? : Product;

    constructor(private route : ActivatedRoute, private productsService : ProductsService){
        this.route.parent?.params.subscribe(params => {
            const productName = params['productName'];
            this.product = this.productsService.list.find(product => product.name === productName)
        })
    }
}