import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsApiService } from 'src/app/http-services/productsApi.service';

import { ProductsComponent } from './products.component';
import { of } from 'rxjs';
import { products as productsMockData } from '../../http-services/products-mock-data';
import { HttpClientModule } from '@angular/common/http';

fdescribe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productsApiService : ProductsApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports : [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productsApiService = TestBed.inject(ProductsApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the products', () => {
      //mocking the service
      spyOn(productsApiService, 'getAll').and.returnValue(of(productsMockData));

      const nativeElement = fixture.nativeElement;
      /* const btnLoad = nativeElement.querySelector('#btnLoadProducts');
      btnLoad.dispatchEvent(new Event('click')); */
      
      component.ngOnInit();

      fixture.detectChanges();

      const spanCount = nativeElement.querySelector('#spanCount');
      expect(spanCount.textContent).toBe(productsMockData.length.toString());

      const productItems = nativeElement.querySelectorAll('#productsList > li');
      expect(productItems.length).toBe(productsMockData.length)

      expect(productItems[0].textContent).toBe(productsMockData[0].name);
  })
});
