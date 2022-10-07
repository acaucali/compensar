import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { Observable, of , throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

import swal from 'sweetalert2';
import { URL_BACKEND } from '../parametros/config';
import { AuthService } from '../parametros/auth.service';


@Injectable()

export class UsuariosService {

    private urlEndPoint:string =URL_BACKEND+'api/compensar/usuarios';
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    public usuarios: Usuario[];
  
    constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }
    
    /*
    private agregarAuthorizationHeader(){
      let token = this.authService.token;
      if(token !=null){
        return this.httpHeaders.append('Authorization', 'Bearer' + token);
      }
      return this.httpHeaders;
    }
    */

    /*
    private isNoAutorizado(e): boolean{
      if(e.status == 401 ){

        if(this.authService.isAuthenticated()){
          this.authService.logout();
        }
        this.router.navigate(['/login']);
        return true;
      }

      if(e.status == 403){
        swal.fire('Acceso denegado',`Hola ${this.authService.usuario.username} no tienes acceso a este recurso`, "warning");
        this.router.navigate(['/usuarios']);
        return true;
      }
      return false;
    }
    */
  
    getUsuariosList(){
      return this.http.get(this.urlEndPoint).pipe(
        map(res =>{
        this.usuarios = res as Usuario[];
        return this.usuarios;
        })
      );
    }

     
    create(usuario: Usuario) : Observable<any>{
      console.log(usuario);
      return this.http.post<any>(this.urlEndPoint, usuario).pipe(
        catchError(e =>{
          
          if(e.status==400){
            return throwError(e);
          }
          if(e.error.mensaje){ 
            console.error(e.error.mensaje);
            swal.fire(e.error.mensaje, e.error.error, 'error');
          }          
          return throwError(e);
        })
      );
    }
  
    getUsuario(id): Observable<Usuario>{
      return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`).pipe(
        catchError(e=>{
          if(e.status != 401 && e.error.mensaje){
            this.router.navigate(['/usuarios']);
            console.error(e.error.mensaje);
            swal.fire(e.error.mensaje, e.error.error, 'error');
          }          
          return throwError(e);
        })
      );
    }
  
    update(usuario: Usuario): Observable<any>{
      return this.http.put<any>(`${this.urlEndPoint}/${usuario.usuarioId}`, usuario).pipe(
        catchError(e =>{
          if(e.status==400){
            return throwError(e);
          }
          if(e.error.mensaje){ 
            console.error(e.error.mensaje);
            swal.fire(e.error.mensaje, e.error.error, 'error');
          }           
          return throwError(e);
        })
      );
    }
  
    delete(id: number): Observable<Usuario>{
      return this.http.delete<Usuario>(`${this.urlEndPoint}/${id}`).pipe(
        catchError(e =>{
          if(e.error.mensaje){ 
            console.error(e.error.mensaje);
            swal.fire(e.error.mensaje, e.error.error, 'error');
          }           
          return throwError(e);
        })
      );
    }
  
  
  }
  