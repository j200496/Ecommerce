import { Component } from '@angular/core';
import { productos } from '../../Core/productos';
import { HeaderComponent } from "../header/header.component";
import { ProductsComponent } from "../../shared/products/products.component";

@Component({
  selector: 'app-carnes',
  imports: [HeaderComponent, ProductsComponent],
  templateUrl: './carnes.component.html',
  styleUrl: './carnes.component.css'
})
export class CarnesComponent {
productos: productos[] = [
    {id:1,nombre:'Churrasco',descripcion:'1.5 lb',cantidad:0,precio:2000,imagen:'/Images/carnes/carne2.jfif'},
  {id:2,nombre:'Parrillada',descripcion:'Familiar',cantidad:0,precio:2500,imagen:'/Images/carnes/carne1.jfif'},
  {id:3,nombre:'Parrillada',descripcion:'Mixta',cantidad:0,precio:1500,imagen:'/Images/carnes/carne3.jfif'}
]
}
