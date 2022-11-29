import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {   ProductosService } from 'src/app/Services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];
modal: any;

  constructor(
    private serveice: ProductosService,
    private activateRoute: ActivatedRoute

  ) {
    this.serveice.consoleProductos()?.subscribe((request) => {
      console.log('Aqui estan');
      this.productos = request;
    });
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      //console.log(params['termino']);
      // this.productos = this.serveice.buscarCliente(params['termino']);
      // this.termino = params['termino'];
      //console.log(this.clientes);
    });
    this.imprimirProductos();
  }
  imprimirProductos() {
    this.serveice.consoleProductos()?.subscribe((request) => {
      console.log('Aqui estan');
    });
  }
 
  eliminar(id: any) {
    Swal.fire({
      title: '¿Estás seguro de que quieres eliminar este cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.serveice.remove(id).subscribe(
          resp => {
            console.log("exito");
            window.location.reload();
          }
        )
        Swal.fire(
          '¡Eliminado!',
          'El cliente ha sido eliminado correctamente.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) { }
    })
  }

  }


