import { Component } from '@angular/core';
import { productos } from '../../Core/productos';
import { HeaderComponent } from "../header/header.component";
import { ProductsComponent } from "../../shared/products/products.component";

@Component({
  selector: 'app-yaroas',
  imports: [HeaderComponent, ProductsComponent],
  templateUrl: './yaroas.component.html',
  styleUrl: './yaroas.component.css'
})
export class YaroasComponent {
productos: productos[] = [
    {id:13,nombre:'Yaroa',descripcion:'Mixta',cantidad:0,precio:250,imagen:'/Images/yaroas/yaroa.jpg'},
  {id:14,nombre:'Yaroa',descripcion:'Grande',cantidad:0,precio:300,imagen:'/Images/yaroas/yaroamixta.jpg'},
  {id:15,nombre:'Yaroa',descripcion:'Platano maduro',cantidad:0,precio:1500,imagen:'/Images/yaroas/yaroapla.webp'}
]
}
