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
}