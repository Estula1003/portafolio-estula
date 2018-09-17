import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPersonal } from '../interfaces/infoPersonal.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info : infoPersonal = {};
  cargada : boolean = false;

  constructor( private http: HttpClient ) { 
    
    this.http.get('assets/data/infoPersonal.json')
    .subscribe( (resp:infoPersonal) => {

        this.cargada = true;
        this.info = resp;

    })


  }
}
