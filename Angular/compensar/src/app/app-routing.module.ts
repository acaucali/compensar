import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './configuracion/guards/auth.guard';
import { ConfigComponent } from './configuracion/archivosinterfaz/config.component';

import { InicioComponent } from './inicio/inicio.component';
import { DomiciliariosComponent } from './domiciliarios/domiciliarios.component';
import { AliadosComponent } from './aliados/aliados.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'usuarios', component: ConfigComponent, canActivate:[AuthGuard]},  
  {path: 'login', component: LoginComponent},

  {path: 'reportes', component: DomiciliariosComponent},
  {path: 'registros', component: AliadosComponent},
  {path: 'inicio', component: InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
