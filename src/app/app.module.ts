import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './inicio/inicio.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { CalidadComponent } from './calidad/calidad.component';
import { ProductosComponent } from './productos/productos.component';
import { ChamboComponent } from './chambo/chambo.component';
import { ContactosComponent } from './contactos/contactos.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EmpresaComponent,
    CalidadComponent,
    ProductosComponent,
    ChamboComponent,
    ContactosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
