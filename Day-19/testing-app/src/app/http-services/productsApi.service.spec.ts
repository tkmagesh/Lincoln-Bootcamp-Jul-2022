import { TestBed } from "@angular/core/testing"
import { ProductsApiService } from "./productsApi.service"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { products as mockProducts} from './products-mock-data';

fdescribe('Products API service', () => {

    let httpTestingController : HttpTestingController,
        productsApiService : ProductsApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers : [ProductsApiService],
            imports : [HttpClientTestingModule]
        });
        productsApiService = TestBed.inject(ProductsApiService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    })

    it('should get all the products', () => {
        productsApiService
            .getAll()
            .subscribe(products => {
                expect(products).toBeTruthy()
                expect(products.length).toBe(3)
                const firstProduct = products.find(product => product.id === 1)
                expect(firstProduct).toBeTruthy();
                expect(firstProduct?.name).toBe('Pen')
            });

        const req = httpTestingController.expectOne('http://localhost:3000/products');
        expect(req.request.method).toBe('GET');
        req.flush(mockProducts);
        
    })
})