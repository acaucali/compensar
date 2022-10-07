import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../configuracion/parametros/auth.service';
import { ModalAliadosService } from './detalle-aliado/modalaliados.service';
import { Aliados } from './model/aliados';
import { AliadosService } from './model/aliados.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-aliados',
  templateUrl: './aliados.component.html',
  styleUrls: ['./aliados.component.css']
})
export class AliadosComponent implements OnInit {

  pageAli: number =1;

  aliados: Aliados[];
  paginador: any;
  aliadoSeleccionado: Aliados;

  elements: any = [];
  previous: any = [];

  firstItemIndex;
  lastItemIndex;

  constructor(private aliadosService: AliadosService ,public modalservice: ModalAliadosService, 
    public authService: AuthService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getAliados();
  }

  delete(aliado: Aliados): void{
    swal.fire({
      title: 'Está seguro?',
      text:  `¿Seguro que desea eliminar el aliado ${aliado.nombre} ?`,
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
        this.aliadosService.delete(aliado.aliadoId).subscribe(
          response =>{
            this.getAliados();
            swal.fire(
              'Aliado eliminado!',
              'El aliado se ha eliminado con éxito',
              'success'
            )
          }
        )
        
      }
    })
  }
  
  abrirModal(aliado: Aliados){
    this.aliadoSeleccionado= aliado;
    this.modalservice.abrirModal();
  }

  crearAliado(){
    this.aliadoSeleccionado = new Aliados();
    this.modalservice.abrirModal();
  }
  
  getAliados(){
    this.aliados = null;
    this.elements = [];
    this.previous = [];
    this.aliadosService.getAliadosList().subscribe(response =>{
      this.aliados = response;
      if(this.aliados.length >0){
        this.aliados.forEach(ali =>{
          this.elements.push({

            aliadoId: ali.aliadoId, razonSocial: ali.razonSocial, nit: ali.nit, nombre: ali.nombre, telefono: ali.telefono,
            cuentaNequi: ali.cuentaNequi, cuentaDaviplata: ali.cuentaDaviplata, cuentaBancaria: ali.cuentaBancaria,
            direccionFactura: ali.direccionFactura, emailFactura: ali.emailFactura, categoriaPrincipal: ali.categoriaPrincipal,
            documentoId: ali.documentoId,
            nombreBanco: ali.nombreBanco, tipoCuentaBancaria: ali.tipoCuentaBancaria
            });
        });
      }
      
    });
  }

}
