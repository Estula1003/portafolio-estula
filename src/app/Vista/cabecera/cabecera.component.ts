import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../servicios/info-pagina.service';
import { Router } from '@angular/router';
;

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(public _infoPersonal : InfoPaginaService, private router : Router) { }

  ngOnInit() {
  }

  buscarProducto( producto : string){

    if (producto.length < 1){
        return ;
    }else{
        this.router.navigate(['/buscar',producto]);
    }

  }


}
