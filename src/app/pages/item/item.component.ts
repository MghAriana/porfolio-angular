import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../service/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  producto: ProductoDescripcion | undefined;
  id: string | undefined;


  constructor(private route: ActivatedRoute ,
              public productoService: ProductosService){}

  ngOnInit() {
    this.route.params
      .subscribe( parametros =>{

        console.log(parametros['id']);

        this.productoService.getProducto(parametros['id'])
              .subscribe( (producto: ProductoDescripcion) => {

                this.producto = producto;
                this.id = parametros['id']

                console.log(producto);

              })
      })
    
  }


}
