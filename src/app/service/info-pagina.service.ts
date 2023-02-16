import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPAgina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPAgina ={} ;
  cargada = false;


  constructor(private http:HttpClient) {
    console.log('Servicio de infoPagina liso');

    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPAgina )=>{

        this.cargada = true;
        this.info = resp;
        
        console.log(resp);
      });
   }
}
