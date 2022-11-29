import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PuestosService {

  getPuestos(){
    return this.puestos;
  }

  constructor() { }
  private puestos : Puestos [] = [
    {
    Id_Puestos: 1,
    Descripcion: "Recepcionista"
    },
    {
    Id_Puestos: 2,
    Descripcion: "Entrenador"
    },
    {
    Id_Puestos: 3,
    Descripcion: "Mantenimiento"
    }
  ];
}
export interface Puestos{
  Id_Puestos:Number
  Descripcion:String
}
