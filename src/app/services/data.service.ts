import { Injectable } from '@angular/core';
import { productos } from '../Core/productos';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private storagekey = 'cart';
  getCart(): productos []{
return JSON.parse(localStorage.getItem(this.storagekey)|| '[]');
  }

  AddProd(p: productos){
    let carrito = this.getCart();
    const index = carrito.findIndex( p => p.id);
    if(index > 0){
      carrito[index].cantidad += p.cantidad;
    }else{
      carrito.push(p);
    }
    localStorage.setItem(this.storagekey,JSON.stringify(carrito));
  }
Delete(id:number){
let carrito = this.getCart().filter(p => p.id !== id);
localStorage.setItem(this.storagekey,JSON.stringify(carrito));
}
}
