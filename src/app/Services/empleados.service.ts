import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  empleados: any = [];
  link = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) {}

  getEmplados() {
    try {
      return this.http.get<any>(`${this.link}/empleados/`);
    } catch (error) {
      console.log(error);
    }
  }

  //llamamos el api para eliminar
  eliminarCliente(id: number) {
    try {
      return this.http.delete<any>(`${this.link}/empleados/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  remove(id: any) {
    return this.http.delete(`${this.link}/empleados/${id}`);
  }
}
