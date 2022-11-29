import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  modal:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  re(){
    this.modal = !this.modal;
  }

}
