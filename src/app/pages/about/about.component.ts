import { Component } from '@angular/core';
import { InfoPaginaService } from '../../service/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(public _infoService: InfoPaginaService ){}

}
