import { Component } from '@angular/core';
import { productos } from '../../Core/productos';
import { ProductsComponent } from "../../shared/products/products.component";
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-bebidas',
  imports: [ProductsComponent,HeaderComponent],
  templateUrl: './bebidas.component.html',
  styleUrl: './bebidas.component.css'
})
export class BebidasComponent {
productos:productos[] =[
  {id:19,nombre:'Jugo',descripcion:'Cereza',cantidad:0,precio:100,imagen:'/Images/bebidas/jugocrza.webp'},
  {id:20,nombre:'Jugo',descripcion:'Naranja',cantidad:0,precio:80,imagen:'/Images/bebidas/jugonaranja.jpg'},
  {id:21,nombre:'Jugo',descripcion:'Piña',cantidad:0,precio:85,imagen:'/Images/bebidas/jugopina.jpg'}
]
}
