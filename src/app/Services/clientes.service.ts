import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  link = 'http://localhost:8080/api/v1/clientes/';
  constructor(private http: HttpClient) { }
  public get(link: string) {
    return this.http.get(link); //GET A LA API
  }
  getCliente() {
    return this.cliente;
  }
  consoleClientes() {
    try {
      return this.http.get<any>(`${this.link}`);
    } catch (error) {
      console.log(error, 'Aqui hay un error');
    }
  }
  remove(id: any) {
    return this.http.delete(`${this.link}${id}`);
  }

  insertData(clientes: Clientes) {
    return this.http.post<any>(`${this.link}`, clientes, {});
  }

  /*  putProducto(form: Clientes) {
     let direccion = this.link + form.id;
     return this.http.put<any>(direccion, form, {});
   } */

  //eliminar clientes
  eliminarCliente(id: number) {
    try {
      return this.http.delete<any>(`${this.link}/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  buscarCliente(termino: string): Clientes[] {
    let clienteArr: Clientes[] = [];
    termino = termino.toLowerCase();

    for (let cliente of this.cliente) {
      let nombre = cliente.Nombre.toLowerCase();

      if (nombre.indexOf(termino) >= 0) {
        clienteArr.push(cliente);
      }
    }
    return clienteArr;
  }

  private cliente: Clientes[] = [
    {
      Id: 1,
      Id_Suc: 1,
      Nombre: 'Juan',
      Apellido: 'Lopez',
      Telefono: 2711596345,
      Estatus: 'success',
      User: 'assets/user/Juan.jpg',
      Suscripcion: 'Dia',
      InicioSus: '10/08/22',
      FinSus: '11/08/22',
      Id_Tarifa: 2,
    },
    {
      Id: 2,
      Id_Suc: 1,
      Nombre: 'Maria',
      Apellido: 'Martinez',
      Telefono: 2711595913,
      Estatus: 'warning',
      User: 'assets/user/Maria.jpg',
      Suscripcion: 'Semanal',
      InicioSus: '10/08/22',
      FinSus: '12/08/22',
      Id_Tarifa: 1,
    },
    {
      Id: 3,
      Id_Suc: 1,
      Nombre: 'Jorge',
      Apellido: 'Morales',
      Telefono: 2711595197,
      Estatus: 'danger',
      User: 'assets/user/Jorge.jpg',
      Suscripcion: 'Mensual',
      InicioSus: '10/08/22',
      FinSus: '01/08/22',
      Id_Tarifa: 3,
    },
    {
      Id: 4,
      Id_Suc: 1,
      Nombre: 'Sofia',
      Apellido: 'Castillo',
      Telefono: 2714826545,
      Estatus: 'danger',
      User: 'assets/user/Sofia.jpg',
      Suscripcion: 'Trimestral',
      InicioSus: '10/08/22',
      FinSus: '02/08/22',
      Id_Tarifa: 2,
    },
    {
      Id: 5,
      Id_Suc: 1,
      Nombre: 'Kevin',
      Apellido: 'Sanchez',
      Telefono: 2711596345,
      Estatus: 'success',
      User: 'assets/user/Kevin.jpg',
      Suscripcion: 'Semestral',
      InicioSus: '10/08/22',
      FinSus: '17/08/22',
      Id_Tarifa: 1,
    },
    {
      Id: 6,
      Id_Suc: 1,
      Nombre: 'Diana',
      Apellido: 'Fernandez',
      Telefono: 2711596345,
      Estatus: 'success',
      User: 'assets/user/Diana.jpg',
      Suscripcion: 'Anual',
      InicioSus: '10/08/22',
      FinSus: '19/08/22',
      Id_Tarifa: 3,
    },
    {
      Id: 7,
      Id_Suc: 1,
      Nombre: 'Fernando',
      Apellido: 'Juarez',
      Telefono: 2711596345,
      Estatus: 'danger',
      User: 'assets/user/Fernando.jpg',
      Suscripcion: 'Semanal',
      InicioSus: '10/08/22',
      FinSus: '04/08/22',
      Id_Tarifa: 2,
    },
    {
      Id: 8,
      Id_Suc: 1,
      Nombre: 'Carmen',
      Apellido: 'Cortes',
      Telefono: 2711596345,
      Estatus: 'success',
      User: 'assets/user/Carmen.jpg',
      Suscripcion: 'Mensual',
      InicioSus: '10/08/22',
      FinSus: '30/08/22',
      Id_Tarifa: 1,
    },
    {
      Id: 0,
      Id_Suc: 1,
      Nombre: 'Publico',
      Apellido: 'Lopez',
      Telefono: 2711596345,
      Estatus: 'success',
      User: 'assets/user/Juan.jpg',
      Suscripcion: 'Dia',
      InicioSus: '10/08/22',
      FinSus: '12/08/22',
      Id_Tarifa: 2,
    },
  ];
}
export interface Clientes {
  Id: number;
  Id_Suc: number;
  Nombre: String;
  Apellido: String;
  Telefono: number;
  Estatus: String;
  User: String;
  Id_Tarifa: number;
  InicioSus: String;
  FinSus: String;
  Suscripcion: String;
}
