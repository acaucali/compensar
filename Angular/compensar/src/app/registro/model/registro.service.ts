import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { Observable, of , throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


import swal from 'sweetalert2';

import { URL_BACKEND } from 'src/app/configuracion/parametros/config';
import { AuthService } from 'src/app/configuracion/parametros/auth.service';
import { Registro } from './registro';




@Injectable()

export class RegistroService {

    private urlEndPoint:string =URL_BACKEND+'api/tinguiclick/registro';
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    public registros: Registro[];
  
    constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }
  
    getRegistrosList(){
      return this.http.get(this.urlEndPoint).pipe(
        map(res =>{
        this.registros = res as Registro[];
        return this.registros;
        })
      );
    }

     
    create(registro: Registro) : Observable<any>{
      console.log(registro);
      return this.http.post<any>(this.urlEndPoint, registro).pipe(
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
  
    getRegistro(id): Observable<Registro>{
      return this.http.get<Registro>(`${this.urlEndPoint}/${id}`).pipe(
        catchError(e=>{
          if(e.status != 401 && e.error.mensaje){
            this.router.navigate(['/login']);
            console.error(e.error.mensaje);
            swal.fire(e.error.mensaje, e.error.error, 'error');
          }          
          return throwError(e);
        })
      );
    }
  
    update(registro: Registro): Observable<any>{
      return this.http.put<any>(`${this.urlEndPoint}/${registro.registroId}`, registro).pipe(
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
  
    delete(id: number): Observable<Registro>{
      return this.http.delete<Registro>(`${this.urlEndPoint}/${id}`).pipe(
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
  