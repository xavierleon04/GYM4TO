import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root',
  })
  export class ProductosService {
    link = 'http://localhost:8080/api/v1/productos/';
    constructor(private http: HttpClient) { }
  

 getProducto() {
  return this.getProducto;
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

  }
 



