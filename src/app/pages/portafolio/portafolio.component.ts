import { Component } from '@angular/core';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {
 constructor (public productosService : ProductosService){
  
 }
}
