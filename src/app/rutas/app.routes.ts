import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from '../componets/agregar/cliente/cliente.component';
import { ClientesComponent } from '../componets/catalogos/clientes/clientes.component';
import { EmpleadosComponent } from '../componets/catalogos/empleados/empleados.component';
import { EmpleadoComponent} from '../componets/agregar/empleado/empleado.component'
import { TarifasComponent } from '../componets/catalogos/tarifas/tarifas.component';
import { HomeComponent } from '../componets/home/home.component';
import { LoginComponent } from '../componets/login/login.component';
import { ProductosComponent } from '../Inventario/productos/productos.component';
import { CategoriaComponent } from '../Inventario/categoria/categoria.component';
import { PuntoVentaComponent } from '../Ventas/punto-venta/punto-venta.component';
import { DetalleventasComponent } from '../Ventas/detalleventas/detalleventas.component';
import { AppComponent } from '../app.component';


const APP_ROUTES : Routes = [
    {path : 'home', component : HomeComponent},
    {path : 'cuotas', component : TarifasComponent},
    {path : 'empleados', component : EmpleadosComponent},
    {path : 'editar' , component : ClienteComponent},
    {path : 'ventas', component : DetalleventasComponent},
    
    {path : 'login', component : LoginComponent},
    {path : 'registro',component : EmpleadoComponent},
    {path : 'tarifas', component : TarifasComponent},
    {path : 'clientes', component : ClientesComponent},

    //Inventario
    {path : 'productos', component : ProductosComponent},
    {path : 'categorias', component : CategoriaComponent},

    //Ventas
    {path : 'puntoventas', component : PuntoVentaComponent},

    //Nada
    {path : '**', pathMatch : 'full', redirectTo : 'home'}
    
   // children :[
        //{path :  'agregarcliente', component : ClienteComponent},
        //{path : 'regresarclientes', component : ClientesComponent}
   // ]},
]

export const APP_ROUTING =RouterModule.forRoot(APP_ROUTES);