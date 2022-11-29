import { Component } from "@angular/core";

@Component({
    selector : 'app-body',
    templateUrl : './body.component.html'
})
export class BodyComponent {

    mostrar = true;

    alumnos : string[] = ['Luis Alberto', 'Jhosymar', 'Gabriel', 'Egdar']

    carreras : string []= ['TI','THU','DNM', 'MAI'];
}