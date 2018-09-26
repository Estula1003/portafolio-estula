import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos : Productos[] = [];
  productoFiltrado : Productos[] = [];
  productoM : string;
  
  constructor( public http : HttpClient ) {
      this.cargarProductos();
   }

   private cargarProductos(){

    return new Promise( (resolve,reject) => {
      
      this.http.get('https://portafolio-db.firebaseio.com/productos_idx.json')
      .subscribe( (resp : Productos[]) => {
          this.productos = resp;
          this.cargando = false;

          resolve();
      });
    });
   }

   getProducto (id : string){
    return this.http.get('https://portafolio-db.firebaseio.com/productos/'+id+'.json');
   }

   buscarProducto (producto : string){
     
    if (this.productos.length === 0){
        //Cargar Archivos
        this.cargarProductos().then( () => {
  // Aplicar el Filtro
  this.filtrarProducto(producto);
        });
      
    }else{
      // Aplicar el Filtro
      this.filtrarProducto(producto);
    }

   }

   private filtrarProducto ( producto : string ){
      this.productoFiltrado = [];
      producto = producto.toLocaleLowerCase(); // hace que el atributo producto llegue en minusculas

      this.productos.forEach( prod => {
          
          const tituloLower = prod.titulo.toLocaleLowerCase(); //Convierte el titulo a minuscula
          const tituloUpper = prod.titulo.toLocaleUpperCase(); //Convierte el titulo a mayuscula
          const productoM = producto.toLocaleUpperCase(); //declara una variable producto con mayusculas

          if( prod.categoria.indexOf(producto) >= 0 || tituloLower.indexOf(producto) >= 0 || tituloUpper.indexOf(productoM) >= 0){
              //Compara si el atributo ingresado esta contenido en los campos titulo o categoria de los productos
              //Luego inserta lo filtrado en la variable productoFiltrado
              this.productoFiltrado.push(prod);
          }
      })

   }

}
