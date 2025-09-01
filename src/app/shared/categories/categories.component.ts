import { Component } from '@angular/core';
import { Categorias } from '../../Core/categorias';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [CommonModule,RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

categorias: Categorias[] = [
  {nombre: 'Pizzas', imagen:'/Images/pizza test.jpg',ruta:'/pizzas'},
  {nombre:'Hamburguesas',imagen:'/Images/hamb.PNG',ruta:'/ham'},
  {nombre:'Platos',imagen:'/Images/Pescfrito.jpg',ruta:'/platos'},
  {nombre:'Mofongos',imagen:'/Images/mof.webp',ruta:'/mofongos'},
  {nombre:'Carnes',imagen:'/Images/parrillada.jpg',ruta:'/carnes'},
  {nombre:'Yaroas',imagen:'/Images/yaroamixta.jpg',ruta:'/yaroas'},  
  {nombre:'Bebidas',imagen:'/Images/jugonaranja.jpg',ruta:'/bebidas'},
];   
}
