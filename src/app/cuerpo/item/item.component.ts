import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';
import { productoCompleto } from '../../interfaces/productoCompleto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto : productoCompleto;
  productoId : string;

  constructor( private route : ActivatedRoute , private _productoCompleto : ProductosService) { }

  ngOnInit() {

    this.route.params.subscribe( parametros => {
      
            /*console.log(parametros['id']);*/
              this._productoCompleto.getProducto(parametros['id'])
              .subscribe( (producto : productoCompleto) => {
                this.producto = producto;
                this.productoId = parametros['id'];
                console.log(producto);
              });
            
          }
    )


  }
}
