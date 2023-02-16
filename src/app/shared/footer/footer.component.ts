import { Component } from '@angular/core';
import { InfoPaginaService } from 'src/app/service/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  anio:number =new Date().getFullYear();
  
  constructor(public _servicio:InfoPaginaService){}

}
