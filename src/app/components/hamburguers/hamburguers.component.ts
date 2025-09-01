import { Component } from '@angular/core';
import { productos } from '../../Core/productos';
import { HeaderComponent } from "../header/header.component";
import { ProductsComponent } from "../../shared/products/products.component";

@Component({
  selector: 'app-hamburguers',
  imports: [HeaderComponent, ProductsComponent],
  templateUrl: './hamburguers.component.html',
  styleUrl: './hamburguers.component.css'
})
export class HamburguersComponent {
productos:productos[] = [
  {id:1,nombre:'Angus',descripcion:'Angus',cantidad:0,precio:400,imagen:'/Images/hamburgers/hambangus.jpg'},
   {id:2,nombre:'Hamburguesa',descripcion:'Pollo',cantidad:0,precio:300,imagen:'/Images/hamburgers/hamb2meat.jpg'},
    {id:3,nombre:'Hamburguesa',descripcion:'Bacon Cheese',cantidad:0,precio:400,imagen:'/Images/hamburgers/hambbacches.jpg'}
];

}
