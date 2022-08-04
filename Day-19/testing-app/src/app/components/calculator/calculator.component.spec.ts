import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CalculatorComponent } from './calculator.component';

fdescribe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports : [
        FormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add the given numbers and display the result', () => {
    const nativeElement = fixture.nativeElement;

    //locate the txtN1 textbox
    const txtN1 = nativeElement.querySelector('#txtN1')

    //assign the value to the txtN2 textbox
    txtN1.value = 100
    txtN1.dispatchEvent(new Event('input'));
    //expect(component.n1).toBe(100);

    //locate the txtN1 textbox
    const txtN2 = nativeElement.querySelector('#txtN2')
    //assign the value to the txtN2 textbox
    txtN2.value = 200
    txtN2.dispatchEvent(new Event('input'));
    //expect(component.n2).toBe(200);

    //locate the button btnAdd
    const btnAdd = nativeElement.querySelector('#btnAdd');
    btnAdd.dispatchEvent(new Event('click'));

    //expect(component.result).toBe(300)

    fixture.detectChanges();

    const divResult = nativeElement.querySelector('#divResult')
    expect(divResult.textContent).toBe('300')
    

  })
});
