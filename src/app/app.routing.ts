import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {HomeComponent} from './component/home/home.component';
import {ErrorComponent} from './component/error/error.component';
import {ListadoComponent} from "./component/listado/listado.component";
import {AgregarObjetoComponent} from "./component/agregar-objeto/agregar-objeto.component";
<<<<<<< HEAD
import {DetalleObjetoComponent} from './component/detalle-objeto/detalle-objeto.component';
=======
import {DetalleObjetoComponent} from "./component/detalle-objeto/detalle-objeto.component";
>>>>>>> f050cc004a9f6f6c9aab3a2c6fffb4547b9bc8eb

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
