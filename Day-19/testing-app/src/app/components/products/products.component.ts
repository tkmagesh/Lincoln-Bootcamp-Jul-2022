import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/http-services/product.model';
import { ProductsApiService } from 'src/app/http-services/productsApi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Product[] = [];
  
  constructor(private productsApiService : ProductsApiService) { }

  ngOnInit(): void {
    
  }

  loadProductsClick(){
    this.productsApiService.getAll()
      .subscribe(products => this.products = products);
  }

}
