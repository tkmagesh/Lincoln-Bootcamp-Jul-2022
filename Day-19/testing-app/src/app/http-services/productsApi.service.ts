import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./product.model";


@Injectable({
    'providedIn' : "root"
})
export class ProductsApiService{
    constructor(private http : HttpClient){

    }
    getAll() : Observable<Product[]> {
        return this.http
            .get<Product[]>('http://localhost:3000/products')
    }

    save(productData : Product) : Observable<Product> {
        if (productData.id === 0){
            return this.http
                .post<Product>('http://localhost:3000/products', productData)
        } else {
            return this.http
                .put<Product>(`http://localhost:3000/products/${productData.id}`, productData)
        }
    }
}