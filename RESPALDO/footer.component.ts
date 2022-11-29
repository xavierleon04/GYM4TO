import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  carrera : string;
  year : number;

  constructor() { 
    this.carrera='DESARROLLO DE SOFTWARE';
    this.year =new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
