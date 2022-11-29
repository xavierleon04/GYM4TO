import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/Services/empleados.service';
import { Puestos, PuestosService } from 'src/app/Services/puestos.service';
import { SwitchService } from 'src/app/Services/switch.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
})
export class EmpleadosComponent implements OnInit {
  empleado: any = [];
  puestos: Puestos[] = [];
  modal: boolean = false;

  constructor(
    private service: EmpleadosService,
    private serviceP: PuestosService,
    private modalS: SwitchService
  ) {}

  ngOnInit(): void {
    this.service.getEmplados()?.subscribe((request) => {
      this.empleado = request;
      console.log(this.empleado);
    });

    this.puestos = this.serviceP.getPuestos();
    this.modalS.$modal.subscribe((valor) => (this.modal = valor));
  }
  openAgregar() {
    this.modal = true;
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
