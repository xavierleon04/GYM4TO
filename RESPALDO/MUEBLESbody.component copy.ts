import { Component } from "@angular/core";

@Component({
    selector : 'app-body',
    templateUrl : './body.component.html'
})
export class BodyComponent {
selectedOption = 0;
muebles = [{
    'nombre': 'Silla',
    'precio': '$300'
},{
    'nombre': 'Mesa',
    'precio': '$1000'
},{
    'nombre': 'Alacena',
    'precio': '$450'
},{
    'nombre': 'Comedor',
    'precio': '$400'
},{
    'nombre': 'Cama',
    'precio': '$3000'
},{
    'nombre': 'Escritorio',
    'precio': '$300'
}];

electrodomesticos =[{
    'nombre': 'Refrigerador',
    'precio': '$5000'
},{
    'nombre': 'Estufa',
    'precio': '$2000'
},{
    'nombre': 'Licuadora',
    'precio': '$500'
},{
    'nombre': 'Plancha',
    'precio': '$500'
},{
    'nombre': 'Waflera',
    'precio': '$560'
},{
    'nombre': 'Bocina',
    'precio': '$1000'
}];



}