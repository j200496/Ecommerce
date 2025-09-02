import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { productos } from '../../Core/productos';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductsComponent } from "../../shared/products/products.component";
import { encabezado } from '../../Core/encabezado';

@Component({
  selector: 'app-pizzas',
  imports: [HeaderComponent, CommonModule, ProductsComponent],
  templateUrl: './pizzas.component.html',
  styleUrl: './pizzas.component.css'
})
export class PizzasComponent {
  enc: encabezado[] = [
    {about:'',contact:'',home:'Home',menu:''}
  ]
productos: productos[] =[
  {id:1,nombre:'Pizza',descripcion:'Mixta',cantidad:0,imagen:'/Images/pizzas/pizzajamomyq.jpg',precio:500},
  {id:2,nombre:'Pizza',descripcion:'Peperoni',cantidad:0,imagen:'/Images/pizzas/pizza test.jpg',precio: 400},
  {id:3,nombre:'Pizza',descripcion:'Vegetales',cantidad:0,imagen:'/Images/pizzas/pizzavege.webp',precio:350}
]
Increment(p:productos){
p.cantidad ++;
}
Decrement(p: productos){
if(p.cantidad > 0){
  p.cantidad --;
}
}
}
