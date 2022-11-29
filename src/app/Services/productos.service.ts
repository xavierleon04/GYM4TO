import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root',
  })
  export class ProductosService {
    link = 'http://localhost:8080/api/v1/productos/';
    constructor(private http: HttpClient) { }
  

 public get(link:string)  {
  return this.http.get(link);
 }
  consoleProductos() {
    try {
      return this.http.get<any>(`${this.link}`);
    } catch (error) {
      console.log(error, 'Aqui hay un error');
    }
  }
 
  remove(id: any) {
    return this.http.delete(`${this.link}${id}`);
  }

  eliminarProducto(id: number) {
    try {
      return this.http.delete<any>(`${this.link}/${id}`);
    } catch (error) {
      console.log(error);
    }
  }


  agregar(data: any) {
    try {
      return this.http.post<any>(`${this.link}`, data, {});
    } catch (error) {
      console.log(error);
    }
  }

  //update
  update(user: any) {
    try {
      return this.http.put<any>(`${this.link}${user.id}`, user, {});
    } catch (error) {
      console.log(error);
    }
  }

  //eliminar clientes
  eliminarCliente(id: number) {
    try {
      return this.http.delete<any>(`${this.link}/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
}

  
 



