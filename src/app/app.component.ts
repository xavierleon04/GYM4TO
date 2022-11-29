import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login:boolean=true;
  todo:boolean=false;
  title = 'APP2';


  onClick(){
    this.login = !this.login;
  }

  onClick1(){
    this.todo = !this.todo;
  }


}

