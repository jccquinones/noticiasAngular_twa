import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {HomeComponent} from './component/home/home.component';
import {ErrorComponent} from './component/error/error.component';
import {ListadoComponent} from "./component/listado/listado.component";
import {AgregarObjetoComponent} from "./component/agregar-objeto/agregar-objeto.component";
import {DetalleObjetoComponent} from "./component/detalle-objeto/detalle-objeto.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
  { path: 'listado', component: ListadoComponent},
  { path: 'agregar-objeto', component: AgregarObjetoComponent},
  { path: 'detalle-objeto/:id', component: DetalleObjetoComponent},
  { path: '**', component: ErrorComponent}
];

export const AppRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
