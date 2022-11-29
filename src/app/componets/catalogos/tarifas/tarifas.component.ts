import { Component, OnInit } from '@angular/core';
import { Tarifas, TarifasService } from 'src/app/Services/tarifas.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css'],
})
export class TarifasComponent implements OnInit {
  descripcion: String = '';
  monto: number = 0;
  tarifas: any = [];
  closeResult = '';

  modal: boolean = false;

  constructor(
    private service: TarifasService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.service.getTarifa()?.subscribe((response) => {
      this.tarifas = response;
    });
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
        this.service.remove(id).subscribe((resp) => {
          console.log('exito', resp);
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

  //agregar
  crearU() {
    const use = {
      descripcion: this.descripcion,
      monto: this.monto,
    };
    this.service.agregar(use)?.subscribe((response) => {
      console.log(response);
      this.clear();
      this.modalService.dismissAll();
      window.location.reload();
    });
  }

  clear() {
    this.descripcion = '';
    this.monto = 0;
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
  //open
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
}
