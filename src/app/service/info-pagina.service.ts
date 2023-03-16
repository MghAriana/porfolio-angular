import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPAgina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
  info: InfoPAgina ={} ;
  cargada = false;
  equipo:any[] = [];

  constructor(private http:HttpClient) {
    console.log('Servicio de infoPagina liso');

    this.CargaInfo();
    this.CargarEquipo();
  }

   private CargaInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPAgina )=>{

        this.cargada = true;
        this.info = resp;
        

      });
   }
   private CargarEquipo(){

    this.http.get('https://agular--html-default-rtdb.firebaseio.com/Equipo.json')
    .subscribe( (resp: any) =>{

      this.equipo = resp ;

      
      console.log(resp);
    });
 
   }

}
