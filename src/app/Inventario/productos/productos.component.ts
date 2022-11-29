import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/Services/clientes.service';
import { SwitchService } from 'src/app/Services/switch.service';
import { Tarifas, TarifasService } from 'src/app/Services/tarifas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { ProductosService } from 'src/app/Services/productos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  closeResult = '';
  categoria: string = '';
  nombre: string = '';
  p_Compra: string = '';
  existencia: string = '';
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
     private serveice: ProductosService,
    private modalS: SwitchService,
    private serviceT: TarifasService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.serveice.consoleProductos()?.subscribe((request) => {
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
        this.serveice.remove(id).subscribe((resp) => {
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
    this.categoria = this.payment[id].categoria;
    this.p_Compra = this.payment[id].p_Compra;
    this.existencia = this.payment[id].existencia;
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
      categoria: this.categoria,
      existencia: this.existencia,
      p_Compra: this.p_Compra,
    };
    this.serveice.agregar(use)?.subscribe((response) => {
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
      categoria: this.categoria,
      existencia: this.existencia,
      p_Compra: this.p_Compra,
    };
    console.log(use, user);
    this.serveice.update(use)?.subscribe((response) => {
      console.log(response);
    });
    this.clear();
    this.modalService.dismissAll();

    window.location.reload();
  }

  // limpiar las variables
  clear() {
    this.categoria = '';
    this.nombre = '';
    this.p_Compra = '';
    this.existencia = '';
  }
}
