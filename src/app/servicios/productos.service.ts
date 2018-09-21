import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos : Productos[] = [];
  
  constructor( public http : HttpClient ) {
      this.cargarProductos();
   }

   private cargarProductos(){
    
    this.http.get('https://portafolio-db.firebaseio.com/productos_idx.json')
    .subscribe( (resp : Productos[]) => {
        console.log(resp );
        this.productos = resp;
        this.cargando = false;
    })
   }
}
