import { Component, OnInit } from '@angular/core';
import { Tarifas, TarifasService } from 'src/app/Services/tarifas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css'],
})
export class TarifasComponent implements OnInit {
  tarifas: any = [];

  modal: boolean = false;

  constructor(private service: TarifasService) {}

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
}
