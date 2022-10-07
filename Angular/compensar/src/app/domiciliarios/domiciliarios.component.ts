import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../configuracion/parametros/auth.service';
import { ModalDomiciliariosService } from './detalle-domicilio/modaldomiciliarios.service';
import { Domiciliarios } from './model/domiciliarios';
import { DomiciliariosService } from './model/domiciliarios.service';
import swal from 'sweetalert2';
import { Aliados } from '../aliados/model/aliados';

@Component({
  selector: 'app-domiciliarios',
  templateUrl: './domiciliarios.component.html',
  styleUrls: ['./domiciliarios.component.css']
})
export class DomiciliariosComponent implements OnInit {

  pageDomi: number =1;

  domiciliarios: Domiciliarios[];
  paginador: any;
  domiciliarioSeleccionado: Domiciliarios;

  elements: any = [];
  previous: any = [];

  firstItemIndex;
  lastItemIndex;

  constructor(private domiciliariosService: DomiciliariosService ,public modalservice: ModalDomiciliariosService, 
    public authService: AuthService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getDomiciliarios();
  }

  delete(domiciliario: Domiciliarios): void{
    swal.fire({
      title: 'Está seguro?',
      text:  `¿Seguro que desea eliminar el domiciliario ${domiciliario.nombres} ?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.value) {
        this.domiciliariosService.delete(domiciliario.domiciliarioId).subscribe(
          response =>{
            this.getDomiciliarios();
            swal.fire(
              'Domiciliario eliminado!',
              'El domiciliario se ha eliminado con éxito',
              'success'
            )
          }
        )
        
      }
    })
  }
  
  abrirModal(domiciliario: Domiciliarios){
    this.domiciliarioSeleccionado= domiciliario;
    this.modalservice.abrirModal();
  }

  crearDomiciliario(){
    this.domiciliarioSeleccionado = new Domiciliarios();
    this.modalservice.abrirModal();
  }
  
  getDomiciliarios(){
    this.domiciliarios = null;
    this.elements = [];
    this.previous = [];
    this.domiciliariosService.getDomiciliariosList().subscribe(response =>{
      this.domiciliarios = response;
      if(this.domiciliarios.length >0){
        this.domiciliarios.forEach(dom =>{
          this.elements.push({

            domiciliarioId: dom.domiciliarioId, nombres: dom.nombres, apellidos: dom.apellidos,
            identificacion: dom.identificacion, tipoIdentificacion: dom.tipoIdentificacion, eps: dom.eps,
            pension: dom.pension, arl: dom.arl, telefono: dom.telefono, direccionHogar: dom.direccionHogar,
            grupoSanguineo: dom.grupoSanguineo, pasaporte: dom.pasaporte, arriendo: dom.arriendo,
            duracionArriendo: dom.duracionArriendo, horarioDisponibilidad: dom.horarioDisponibilidad, diasDisponibilidad: dom.diasDisponibilidad,usuarioId: dom.usuarioId,      
            documentoId: dom.documentoId, cuentaNequi: dom.cuentaNequi, cuentaDaviplata: dom.cuentaDaviplata,
            cuentaBancaria: dom.cuentaBancaria, tipoCuentaBancaria: dom.tipoCuentaBancaria, nombreBanco: dom.nombreBanco
            });
        });
      }
      
    });
  }


}
