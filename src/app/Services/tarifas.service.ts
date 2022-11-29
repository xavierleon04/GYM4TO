import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TarifasService {
  constructor(private http: HttpClient) {}

  getTarifa() {
    try {
      return this.http.get<any>(`${environment.api}tarifas/`);
    } catch (error) {
      console.log(error);
    }
  }
  remove(id: any) {
    return this.http.delete(`${environment.api}tarifas/${id}`);
  }

  //eliminar clientes
  eliminarCliente(id: number) {
    try {
      return this.http.delete<any>(`${environment.api}${id}`);
    } catch (error) {
      console.log(error);
    }
  }
}
export interface Tarifas {
  Id_Tarifa: number;
  Descripcion: String;
  Monto: number;
  Dias: number;
}
