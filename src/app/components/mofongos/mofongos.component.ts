import { Component } from '@angular/core';
import { productos } from '../../Core/productos';
import { ProductsComponent } from "../../shared/products/products.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-mofongos',
  imports: [ProductsComponent, HeaderComponent],
  templateUrl: './mofongos.component.html',
  styleUrl: './mofongos.component.css'
})
export class MofongosComponent {
productos:productos[] =[
  {id:7,nombre:'Mofongo grande',descripcion:'Cerdo',cantidad:0,precio:500,imagen:'/Images/mofongo/mofongo.jpg'},
  {id:8,nombre:'Mofongo pequeño',descripcion:'Camarones',cantidad:0,precio:450,imagen:'/Images/mofongo/mofcamarones.jpg'},
  {id:9,nombre:'Mofongo mediano',descripcion:'Mixto',cantidad:0,precio:550,imagen:'/Images/mofongo/mfngo.jpeg'}
]
}
