import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Component } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { HamburguersComponent } from './components/hamburguers/hamburguers.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { MofongosComponent } from './components/mofongos/mofongos.component';
import { PlatosComponent } from './components/platos/platos.component';
import { CarnesComponent } from './components/carnes/carnes.component';
import { YaroasComponent } from './components/yaroas/yaroas.component';


export const routes: Routes = [

    {path:'',component:HomeComponent},

    {path:'home',component:HomeComponent},
        
        {path:'cart',component:CartComponent},
        {path:'pizzas',component: PizzasComponent},
        {path:'ham',component:HamburguersComponent},
        {path:'bebidas',component:BebidasComponent},
        {path:'mofongos',component:MofongosComponent},
        {path:'platos',component:PlatosComponent},
        {path:'carnes',component:CarnesComponent},
        {path:'yaroas',component:YaroasComponent}
    
    
    
];
