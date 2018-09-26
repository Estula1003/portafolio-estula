import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(  private route : ActivatedRoute, public _productoService : ProductosService) { }

  ngOnInit() {

      this.route.params.subscribe( parametros =>{
          console.log(parametros['producto']);
          this._productoService.buscarProducto(parametros['producto']);
      })

  }



}
