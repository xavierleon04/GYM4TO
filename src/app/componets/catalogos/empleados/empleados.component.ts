import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/Services/empleados.service';
import { Puestos, PuestosService } from 'src/app/Services/puestos.service';
import { SwitchService } from 'src/app/Services/switch.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  closeResult = '';
  nombre: string = '';
  p_Apellido: string = '';
  seg_Apellido: string = '';
  index: any = '';

  tarifas: any = [];

  dias: number = 0;
  fech: any = 0;
  dateVar: number = 0;
  ext: number = 0;

  public listEmpleados: any = [];
  public payment: any = [];
  empleado: any = [];
  puestos: Puestos[] = [];
  modal: boolean = true;
  buscador: boolean = false;
  termino: string = '';
  tari: boolean = false;


  constructor(
    private empleadoService: EmpleadosService,
    private serviceP: PuestosService,
    private modalS: SwitchService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.empleadoService.getEmplados()?.subscribe((request) => {
      this.empleado = request;
      console.log(this.empleado);
    });

    this.puestos = this.serviceP.getPuestos();
    this.modalS.$modal.subscribe((valor) => (this.modal = valor));
  }
  openAgregar() {
    this.modal = true;
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
    this.nombre = this.empleado[id].nombre;
    this.p_Apellido = this.empleado[id].p_Apellido;
    this.seg_Apellido = this.empleado[id].seg_Apellido;
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

    };
    this.empleadoService.agregar(use)?.subscribe((response) => {
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

    };
    console.log(use, user);
    this.empleadoService.update(use)?.subscribe((response) => {
      console.log(response);
    });
    this.clear();
    this.modalService.dismissAll();

    //window.location.reload();
  }

  // limpiar las variables
  clear() {
    this.nombre = '';
    this.p_Apellido = '';
    this.seg_Apellido = '';

  }

  // funcion para eliminar un empleado
  eliminar(id: any) {
    Swal.fire({
      title: '¿Estás seguro de que quieres eliminar este cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No, cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadoService.remove(id).subscribe((resp) => {
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
