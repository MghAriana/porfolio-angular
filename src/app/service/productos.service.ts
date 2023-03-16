import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  cargando = true;

  constructor( private http: HttpClient) { 

    this.cargarProductos();

  }


  private cargarProductos() {

    this.http.get('https://angular-html-25cf9.firebaseio.com/productos_idx')
        .subscribe( (resp: ProductoInterface ) => {

          console.log(resp);
          this.ProductoInterface = resp;
          this.cargando = false;

        });

}
}
