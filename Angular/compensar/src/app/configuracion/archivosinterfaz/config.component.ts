import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { ModalUsuarioService } from '../detalle/modalusuario.service';
import { AuthService } from '../parametros/auth.service';
import { Usuario } from '../usuarios/usuario';
import { UsuariosService } from '../usuarios/usuario.service';


@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  pageUsu: number =1;

  usuarios: Usuario[];
  paginador: any;
  usuarioSeleccionado: Usuario;

  elements: any = [];
  previous: any = [];

  firstItemIndex;
  lastItemIndex;

  constructor(private usuarioService: UsuariosService ,public modalservice: ModalUsuarioService, 
    public authService: AuthService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getUsuarios();
  }

  delete(usuario: Usuario): void{
    swal.fire({
      title: 'Está seguro?',
      text:  `¿Seguro que desea eliminar el usuario ${usuario.username} ?`,
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
        this.usuarioService.delete(usuario.usuarioId).subscribe(
          response =>{
            this.getUsuarios();
            swal.fire(
              'Usuario eliminado!',
              'El usuario se ha eliminado con éxito',
              'success'
            )
          }
        )
        
      }
    })
  }
  
  abrirModal(usuario: Usuario){
    this.usuarioSeleccionado= usuario;
    this.modalservice.abrirModal();
  }

  crearUsuario(){
    this.usuarioSeleccionado = new Usuario();
    this.modalservice.abrirModal();
  }
  
  getUsuarios(){
    this.usuarios = null;
    this.elements = [];
    this.previous = [];
    this.usuarioService.getUsuariosList().subscribe(response =>{
      this.usuarios = response;
      if(this.usuarios.length >0){
        this.usuarios.forEach(usu =>{
          this.elements.push({
            
            usuarioId: usu.usuarioId, nombres: usu.nombres, apellidos: usu.apellidos, identificacion: usu.identificacion, 
            tipoIdentificacion: usu.tipoIdentificacion, telefono: usu.telefono, direccion: usu.direccion, email: usu.email, tipoUsuario: usu.tipoUsuario,
            username: usu.username, password: usu.password, habilitado: usu.habilitado, roles: usu.roles
            
            });
        });
      }
      
    });
  }

}
