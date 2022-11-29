import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/Services/clientes.service';
import { SwitchService } from 'src/app/Services/switch.service';
import { Tarifas, TarifasService } from 'src/app/Services/tarifas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  closeResult = '';
  nombre: string = '';
  p_Apellido: string = '';
  seg_Apellido: string = '';
  Telefono: string = '';
  index: any = '';

  public listClientes: any = [];
  public payment: any = [];
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
    private activateRoute: ActivatedRoute,
    private modalService: NgbModal
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

  //Modal para añadir
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  openUp(content: any, id: any) {
    this.index = id;
    this.nombre = this.payment[id].nombre;
    this.p_Apellido = this.payment[id].p_Apellido;
    this.seg_Apellido = this.payment[id].seg_Apellido;
    this.Telefono = this.payment[id].telefono;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //crear un cliente
  crearU() {
    const use = {
      nombre: this.nombre,
      p_Apellido: this.p_Apellido,
      seg_Apellido: this.seg_Apellido,
      telefono: this.Telefono,
    };
    this.clienteService.agregar(use)?.subscribe((response) => {
      console.log(response);
      this.clear();
      this.modalService.dismissAll();
      window.location.reload();
    });
  }

  //editar cliente
  updateU(id: any, user: any) {
    const use = {
      id: id,
      nombre: this.nombre,
      p_Apellido: this.p_Apellido,
      seg_Apellido: this.seg_Apellido,
      telefono: this.Telefono,
    };
    console.log(use, user);
    this.clienteService.update(use)?.subscribe((response) => {
      console.log(response);
    });
    this.clear();
    this.modalService.dismissAll();
    window.location.reload();
  }

  // limpiar las variables
  clear() {
    this.nombre = '';
    this.p_Apellido = '';
    this.seg_Apellido = '';
    this.Telefono = '';
  }
}
