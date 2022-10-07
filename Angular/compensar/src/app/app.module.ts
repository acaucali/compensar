import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DetalleComponent } from './configuracion/detalle/detalle.component';

import { MenuComponent } from './menu/menu.component';
import { TokenInterceptor } from './configuracion/interceptors/token.interceptor';
import { AuthInterceptor } from './configuracion/interceptors/auth.interceptor';
import { AgmCoreModule } from '@agm/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTreeModule, MatIconModule, MatButtonModule, MatNativeDateModule, MatSelectModule } from '@angular/material';

import { UsuariosService } from './configuracion/usuarios/usuario.service';
import { ConfigComponent } from './configuracion/archivosinterfaz/config.component';
import { InicioComponent } from './inicio/inicio.component';
import { PanelComponent } from './panel/panel.component';

import { DomiciliariosComponent } from './domiciliarios/domiciliarios.component';
import { DetalleDomicilioComponent } from './domiciliarios/detalle-domicilio/detalle-domicilio.component';
import { DomiciliariosService } from './domiciliarios/model/domiciliarios.service';
import { AliadosComponent } from './aliados/aliados.component';
import { DetalleAliadoComponent } from './aliados/detalle-aliado/detalle-aliado.component';
import { AliadosService } from './aliados/model/aliados.service';


import { RegistroComponent } from './registro/registro.component';
import { DetalleRegistroComponent } from './registro/detalle-registro/detalle-registro.component';
import { RegistroService } from './registro/model/registro.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConfigComponent,
    DetalleComponent,
    MenuComponent,
   
    InicioComponent,
    PanelComponent,
    DomiciliariosComponent,
    DetalleDomicilioComponent,
    AliadosComponent,
    DetalleAliadoComponent,

    RegistroComponent,
    DetalleRegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule, MatPaginatorModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTreeModule, MatIconModule, MatButtonModule,
    MatSelectModule, 
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [UsuariosService,  DomiciliariosService, AliadosService,
     RegistroService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
