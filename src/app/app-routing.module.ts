import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {EmpresaComponent} from './empresa/empresa.component';
import {CalidadComponent} from './calidad/calidad.component';
import {ProductosComponent} from './productos/productos.component';
import {ChamboComponent} from './chambo/chambo.component';
import {ContactosComponent} from './contactos/contactos.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: '', component: InicioComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'calidad', component: CalidadComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'chambo', component: ChamboComponent},
  {path: 'contactos', component: ContactosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
