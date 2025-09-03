import { Component } from '@angular/core';
import { productos } from '../../Core/productos';
import { HeaderComponent } from "../header/header.component";
import { ProductsComponent } from "../../shared/products/products.component";

@Component({
  selector: 'app-platos',
  imports: [HeaderComponent, ProductsComponent],
  templateUrl: './platos.component.html',
  styleUrl: './platos.component.css'
})
export class PlatosComponent {
productos: productos[] = [
 {id:10,nombre:'Pasta',descripcion:'con camarones',cantidad:0,precio:600,imagen:'Images/platos/pastacamarones.jpg'},
{id:11,nombre:'Pescado',descripcion:'Frito con coco',cantidad:0,precio:700,imagen:'Images/platos/Pescfrito.jpg'},
{id:12,nombre:'Pechuga',descripcion:'Ala plancha',cantidad:0,precio:400,imagen:'Images/platos/pechugaalap.jpg'},
];
}
