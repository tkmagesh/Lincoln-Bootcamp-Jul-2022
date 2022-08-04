import { Component, OnInit } from '@angular/core';
import { GreeterService } from 'src/app/services/greeter.service';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {
  userName : string = '';
  message : string = '';

  constructor(private greeterService : GreeterService) {

  }

  ngOnInit(): void {
  }

  btnGreetClick(){
    this.message = this.greeterService.greet(this.userName)
  }
  
}
