import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './componentes/nav/nav.component';

import { ItinerarioComponent } from './componentes/itinerario/itinerario.component';
import { MenubarComponent } from './componentes/menubar/menubar.component';
//import { NotFoundComponent } from './componentes/not-found/not-found.component'; // Asegúrate de tener este componente creado

const routes: Routes = [
   /* path: 'nav',
    component: NavComponent*/
    { path: 'nav', component: NavComponent },
    { path: 'itinerario', component: ItinerarioComponent },
    { path: 'menubar', component: MenubarComponent },
    { path: '', redirectTo: '/itinerario', pathMatch: 'full' }, // Ruta por defecto
    //{ path: '**', component: NotFoundComponent } // Ruta de página no encontrada (404)
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
