import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert2';

import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { Usuario } from '../configuracion/usuarios/usuario';
import { AuthService } from '../configuracion/parametros/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(private authService: AuthService, private router: Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit() {
    if(this.authService.isAuthenticated()){
      swal.fire('Login',`usuario: ${this.authService.usuario.username} ya estás autenticado`, 'info');
      this.router.navigate(['/inicio']);
    }
  }

  login(): void{
    
    if(this.usuario.username == null || this.usuario.password == null){
      swal.fire( 'Error inicio de sesión','Usuario o contraseña vacías!', 'error');
    }

    this.authService.login(this.usuario).subscribe( response => {
      this.router.navigate(['/inicio']);
      
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      
      let usuario = this.authService.usuario;
      
      swal.fire('Ingreso',`Bienvenido a Compensar EPS, 
      Usuario: ${usuario.username}`, 'success');
    }, error => {
      if(error.status == 400){
        swal.fire('Error Login',`Usuario o clave incorrectas !`, 'error');
      }
    }   
    
    );
  }
}
