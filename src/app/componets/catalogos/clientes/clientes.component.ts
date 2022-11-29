import { Component, OnInit } from '@angular/core';
import { Clientes, ClientesService } from 'src/app/Services/clientes.service';
import { SwitchService } from 'src/app/Services/switch.service';
import { Tarifas, TarifasService } from 'src/app/Services/tarifas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  nombre: string = '';
  p_Apellido: string = '';
  seg_Apellido: string = '';
  Telefono: string = '';

  public listClientes: any = [];
  public payment: any = [];
  clientes: Clientes[] = [];
  tarifas: any = [];

  dias: number = 0;
  fech: any = 0;
  dateVar: number = 0;
  ext: number = 0;

  modal: boolean = true;
  tari: boolean = false;
  buscador: boolean = false;
  termino: string = '';

  constructor(
    private clienteService: ClientesService,
    private modalS: SwitchService,
    private serviceT: TarifasService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clienteService.consoleClientes()?.subscribe((request) => {
      console.log(request);
      this.payment = request;
    });
    //this.clientes = this.serveice.getCliente();

    this.serviceT.getTarifa()?.subscribe((response) => {
      this.tarifas = response;
    });

    this.modalS.$modal.subscribe((valor) => (this.modal = valor));

    console.info(Date());
  }

  onChange(target: any) {
    let fin = target.value;
    console.log(fin);
    this.dias = fin;

    this.tari = true;
    this.obtenerInicio();
    this.obtenerFin();
  }

  openAgregar() {
    this.modal = true;
  }
  openEditar() {
    this.modal = true;
  }

  obtenerInicio() {
    this.dateVar = new Date().getTime();
    console.log(this.dateVar);
  }

  obtenerFin() {
    this.ext = this.dateVar + this.dias;

    console.log(this.ext);
  }

  buscarCliente(termino: string) {
    console.log(termino);
    this.modal = false;
    this.clientes.splice(0);

    this.clientes.find((array) => console.log(array));
  }

  eliminar(id: any) {
    Swal.fire({
      title: '¿Estás seguro de que quieres eliminar este cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No, cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.remove(id).subscribe((resp) => {
          console.log('exito');
          window.location.reload();
        });
        Swal.fire(
          '¡Eliminado!',
          'El cliente ha sido eliminado correctamente.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    });
  }
}
