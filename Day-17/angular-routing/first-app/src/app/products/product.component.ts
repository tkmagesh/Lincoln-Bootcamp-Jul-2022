import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, ProductsService } from "./products.service";


@Component({
    selector : 'app-product',
    templateUrl : 'product.component.html'
})
export class ProductComponent{

    product? : Product ;

    constructor(private router : ActivatedRoute, private productsService : ProductsService){
        this.router.params.subscribe(params => {
            const productName = params['productName']
            this.product = this.productsService.list.find(product => product.name === productName);
        })
    }

}