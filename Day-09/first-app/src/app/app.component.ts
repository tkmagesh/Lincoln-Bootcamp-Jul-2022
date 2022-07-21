import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //state
  title = 'first-app';

  /* 
  constructor(){
    setTimeout(() => {
      this.title = 'My-App'
    }, 5000);
  } 
  */

  onChangeTitle(){
    this.title = 'Angular-App'
  }
  
}
