import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/Services/switch.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private modalS :  SwitchService) { }

  ngOnInit(): void {
  }


closeAgregar(){
  this.modalS.$modal.emit(false)
}

}
