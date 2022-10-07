import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { Observable, of , throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


import swal from 'sweetalert2';

import { URL_BACKEND } from 'src/app/configuracion/parametros/config';
import { AuthService } from 'src/app/configuracion/parametros/auth.service';
import { Aliados } from './aliados';



@Injectable()

export class AliadosService {

    private urlEndPoint:string =URL_BACKEND+'api/tinguiclick/aliados';
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    public aliados: Aliados[];
  
    constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }
  
    getAliadosList(){
      return this.http.get(this.urlEndPoint).pipe(
        map(res =>{
        this.aliados = res as Aliados[];
        return this.aliados;
        })
      );
    }

     
    create(aliado: Aliados) : Observable<any>{
      console.log(aliado);
      return this.http.post<any>(this.urlEndPoint, aliado).pipe(
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
  
    getAliado(id): Observable<Aliados>{
      return this.http.get<Aliados>(`${this.urlEndPoint}/${id}`).pipe(
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
  
    update(aliado: Aliados): Observable<any>{
      return this.http.put<any>(`${this.urlEndPoint}/${aliado.aliadoId}`, aliado).pipe(
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
  
    delete(id: number): Observable<Aliados>{
      return this.http.delete<Aliados>(`${this.urlEndPoint}/${id}`).pipe(
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
  