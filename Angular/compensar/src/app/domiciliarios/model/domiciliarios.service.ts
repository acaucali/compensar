import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { Observable, of , throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


import swal from 'sweetalert2';
import { Domiciliarios } from './domiciliarios';
import { URL_BACKEND } from 'src/app/configuracion/parametros/config';
import { AuthService } from 'src/app/configuracion/parametros/auth.service';



@Injectable()

export class DomiciliariosService {

    private urlEndPoint:string =URL_BACKEND+'api/tinguiclick/domiciliarios';
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    public domiciliarios: Domiciliarios[];
  
    constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }
  
    getDomiciliariosList(){
      return this.http.get(this.urlEndPoint).pipe(
        map(res =>{
        this.domiciliarios = res as Domiciliarios[];
        return this.domiciliarios;
        })
      );
    }

     
    create(domiciliario: Domiciliarios) : Observable<any>{
      console.log(domiciliario);
      return this.http.post<any>(this.urlEndPoint, domiciliario).pipe(
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
  
    getDomicilio(id): Observable<Domiciliarios>{
      return this.http.get<Domiciliarios>(`${this.urlEndPoint}/${id}`).pipe(
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
  
    update(domiciliario: Domiciliarios): Observable<any>{
      return this.http.put<any>(`${this.urlEndPoint}/${domiciliario.domiciliarioId}`, domiciliario).pipe(
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
  
    delete(id: number): Observable<Domiciliarios>{
      return this.http.delete<Domiciliarios>(`${this.urlEndPoint}/${id}`).pipe(
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
  