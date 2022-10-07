import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { AuthService } from '../configuracion/parametros/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService:AuthService, private router: Router) { }

  ngOnInit() {
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
