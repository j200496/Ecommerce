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

  AddProd(pr: productos){
    let carrito = this.getCart();
    const index = carrito.findIndex(p => p.id === pr.id);
    if(index >= 0){
      carrito[index].cantidad += pr.cantidad;
    }else{
      carrito.push(pr);
    }
    localStorage.setItem(this.storagekey,JSON.stringify(carrito));
  }
Delete(id:number){
let carrito = this.getCart().filter(p => p.id !== id);
localStorage.setItem(this.storagekey,JSON.stringify(carrito));
}
}
