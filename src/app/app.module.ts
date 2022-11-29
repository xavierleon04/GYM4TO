import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SlidebarComponent } from './componets/slidebar/slidebar.component';
import { FooterComponent } from './componets/footer/footer.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { HomeComponent } from './componets/home/home.component';
import { LoginComponent } from './componets/login/login.component';
import { ClientesComponent } from './componets/catalogos/clientes/clientes.component';
import { EmpleadosComponent } from './componets/catalogos/empleados/empleados.component';

import { ClientesService } from './Services/clientes.service';
import { TarifasComponent } from './componets/catalogos/tarifas/tarifas.component';
import { EmpleadosService } from './Services/empleados.service';
import { APP_ROUTING } from './rutas/app.routes';
import { EmpleadoComponent } from './componets/agregar/empleado/empleado.component';
import { ClienteComponent } from './componets/agregar/cliente/cliente.component';
import { ProductosComponent } from './Inventario/productos/productos.component';
import { CategoriaComponent } from './Inventario/categoria/categoria.component';
import { PuntoVentaComponent } from './Ventas/punto-venta/punto-venta.component';
import { PuestosComponent } from './catalogos/puestos/puestos.component';
import { DetalleventasComponent } from './Ventas/detalleventas/detalleventas.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SlidebarComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ClientesComponent,
    EmpleadosComponent,
    TarifasComponent,
    EmpleadoComponent,
    ClienteComponent,
    ProductosComponent,
    CategoriaComponent,
    PuntoVentaComponent,
    PuestosComponent,
    DetalleventasComponent,
  ],
  imports: [BrowserModule, APP_ROUTING, HttpClientModule],
  providers: [ClientesService, EmpleadosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
