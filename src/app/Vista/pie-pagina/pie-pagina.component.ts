import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../servicios/info-pagina.service';  

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.css']
})
export class PiePaginaComponent implements OnInit {

  ngOnInit() {
  }

  constructor( public _infoPersonal : InfoPaginaService ) { }

  anio = new Date().getFullYear();

  GoFacebook (link){
    
    switch (link){
        case 1:
        window.location.href= this._infoPersonal.info.facebook;
        break;
        case 2:
        window.location.href=this._infoPersonal.info.twitter;
        break;
        case 3:
        window.location.href=this._infoPersonal.info.instagram;
        break;
        case 4:
        window.location.href=this._infoPersonal.info.tumblr;
        break;
    }
  }
}
