import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPersonal } from '../interfaces/infoPersonal.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info : infoPersonal = {};
  cargada : boolean = false;
  equipo: any[] = [];

  constructor( private http: HttpClient ) { 
      this.cargarInfo();
      this.cargarEquipo();
  }
  private cargarInfo() {
    this.http.get('assets/data/infoPersonal.json')
    .subscribe( (resp:infoPersonal) => {

        this.cargada = true;
        this.info = resp;
    })
  }

  private cargarEquipo() {
    this.http.get('https://portafolio-db.firebaseio.com/equipo.json')
    .subscribe( (resp : any[]) => {
        this.cargada = true;
        this.equipo = resp;
    })
  }
}
