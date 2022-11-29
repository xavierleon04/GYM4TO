import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { request } from 'http';
import { Clientes, ClientesService } from 'src/app/Services/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  clientes: any = [];
  termino: String = '';

  constructor(
    private serveice: ClientesService,
    private activateRoute: ActivatedRoute
  ) {
    this.serveice.consoleClientes()?.subscribe((request) => {
      console.log('Aqui estan');
    });
  }

  ngOnInit(): void {
    this.clientes = this.serveice.getCliente();

    //console.log(this.clientes);
    this.activateRoute.params.subscribe((params) => {
      //console.log(params['termino']);
      this.clientes = this.serveice.buscarCliente(params['termino']);
      this.termino = params['termino'];
      //console.log(this.clientes);
    });
    this.imprimirClientes();
  }

  imprimirClientes() {
    this.serveice.consoleClientes()?.subscribe((request) => {
      console.log('Aqui estan');
    });
  }
}
