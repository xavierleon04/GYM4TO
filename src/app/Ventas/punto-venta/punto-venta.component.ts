import { Component, OnInit } from '@angular/core';
import { Clientes, ClientesService } from 'src/app/Services/clientes.service';

@Component({
  selector: 'app-punto-venta',
  templateUrl: './punto-venta.component.html',
  styleUrls: ['./punto-venta.component.css']
})
export class PuntoVentaComponent implements OnInit {
  clientes : Clientes [] = [];

  constructor(private serviceC : ClientesService,
              ) { }

  ngOnInit(): void {
    this.clientes = this.serviceC.getCliente();
  }

}
