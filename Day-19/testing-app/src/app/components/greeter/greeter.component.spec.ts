import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { GreeterService } from 'src/app/services/greeter.service';

import { GreeterComponent } from './greeter.component';

describe('GreeterComponent', () => {
  let component: GreeterComponent;
  let fixture: ComponentFixture<GreeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreeterComponent ],
      imports : [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('should diplay the greet message when greeted', () => {

    const greeterService = TestBed.inject(GreeterService)
    spyOn(greeterService, 'greet').and.returnValue('dummy message');

    const nativeElement = fixture.nativeElement;

    const txtUserName = nativeElement.querySelector('#txtUserName')
    txtUserName.value = 'Magesh';
    txtUserName.dispatchEvent(new Event('input'));

    const btnGreet = nativeElement.querySelector('#btnGreet')
    btnGreet.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    const divMessage = nativeElement.querySelector('div');
    expect(divMessage.textContent).toBe('dummy message')

  })


});
