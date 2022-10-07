import { Component, OnInit } from '@angular/core';
import { AuthService } from '../configuracion/parametros/auth.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
