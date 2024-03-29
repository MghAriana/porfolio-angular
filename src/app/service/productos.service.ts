import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {


  cargando = true;

  productos: Producto[] = [];

  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient) { 

    this.cargarProductos();

  }


  private cargarProductos() {

    return new Promise ( (resolve , rejet ) =>{
         this.http.get <Producto[]> ('https://agular--html-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Producto[] ) => {

      console.log(resp);

      this.productos = resp; 
      
      setTimeout(()=>{
        this.cargando = false;
      },2000)
      
      resolve();

    });
    } )

 

}
  getProducto(id:string){

    return this.http.get<ProductoDescripcion>(`https://agular--html-default-rtdb.firebaseio.com/productos/${ id }.json`);

  }

  buscarProducto(termino:string){

    if( this.productos.length === 0 ){
      //cargo producto
      this.cargarProductos().then(()=> {
        //cargar p
        this.filtrarProductos( termino);

      });
    }else{
      //aplicar filtro
      this.filtrarProductos( termino);
    }

    this.productosFiltrado= this.productos.filter(producto =>{
      return true;
    });

    console.log( this.productosFiltrado);
  }

  private filtrarProductos(termino:string){

    console.log(this.productos);

    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();



    this.productos.forEach( prod =>{

      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf( termino )>= 0  || prod.titulo.indexOf(termino) >=0 ){
          this.productosFiltrado.push( prod );
      }
    } );
  }

}
