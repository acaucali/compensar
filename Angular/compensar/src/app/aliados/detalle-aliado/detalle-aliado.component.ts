import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { URL_BACKEND } from 'src/app/configuracion/parametros/config';
import swal from 'sweetalert2';
import { AliadosComponent } from '../aliados.component';
import { Aliados } from '../model/aliados';
import { AliadosService } from '../model/aliados.service';
import { ModalAliadosService } from './modalaliados.service';

@Component({
  selector: 'detalle-aliado',
  templateUrl: './detalle-aliado.component.html',
  styleUrls: ['./detalle-aliado.component.css']
})
export class DetalleAliadoComponent implements OnInit {

  private errores: string[];


  @Input() aliado: Aliados;
 
  private archivoSeleccionado: File;

  private urlEndPoint:string =URL_BACKEND+'api/tinguiclick/documento';
  titulo: string = "Datos Registro";
  constructor(private aliadoService: AliadosService, private router: Router, 
    private activatedRoute: ActivatedRoute, private aliadoComponent: AliadosComponent,
    public modalservice: ModalAliadosService, 
   ) { }

  ngOnInit() {
    
  }

  
 
  create(): void{
    console.log(this.aliado);
    this.aliadoService.create(this.aliado).subscribe(
      json => {
      swal.fire('Nuevo Aliado', `${json.mensaje}`, 'success');
      this.cerrarModal();
      this.aliadoComponent.getAliados();
    },
    err =>{
      this.errores = err.error.errors as string[];
      console.error('Código error: '+err.status);
      console.error(err.error.errors);
    }
    );
  }

  update(): void{
    this.aliadoService.update(this.aliado).subscribe(json =>{
      swal.fire('Aliado Actualizado',  `${json.mensaje}`, 'success')
      this.cerrarModal();
    },
    err =>{
      this.errores = err.error.errors as string[];
      console.error('Código error: '+err.status);
      console.error(err.error.errors);
    }
    );
  }

  cerrarModal(){
    this.modalservice.cerrarModal();
  }

  /*
  seleccionarDocumento(event){
    this.archivoSeleccionado= event.target.files[0];
    console.log(this.archivoSeleccionado);
  }


  subirDocumento(){
    this.documentoservice.subirDocumento(this.aliado.aliadoId, this.archivoSeleccionado).subscribe(
      
      json => {
        swal.fire('Documento subido', `${json.mensaje}`, 'success');
        this.documento= json.documento;
        this.aliado.documentoId= this.documento.documentoId;
        console.log(this.aliado);
        console.log(this.documento);
      },
      err =>{
        this.errores = err.error.errors as string[];
        console.error('Código error: '+err.status);
        console.error(err.error.errors);
      }

    );
  }

  eliminarDocumento(): void{
    swal.fire({
      title: 'Está seguro?',
      text:  `¿Seguro que desea eliminar el documento?`,
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
        this.documentoservice.deleteDocumento(this.aliado.documentoId).subscribe(
          response =>{
            swal.fire(
              'Documento eliminado!',
              'El documento se ha eliminado con éxito',
              'success'
            )
          }
        )
        this.aliado.documentoId = 0;
      }
    })
    
  }

  descargarDocumento(){
    window.open(`${this.urlEndPoint}/download/${this.aliado.documentoId}`); 
  }
  */
}
