import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Cart } from '../../Core/cart';
import { CommonModule } from '@angular/common';
import { productos } from '../../Core/productos';
import { DataService } from '../../services/data.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';


@Component({
  selector: 'app-cart',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  dataservice = inject(DataService);
cart: Cart[] =[
  {nombre:'Nombre',descripcion:'Desc', cantidad:'Cantidad',precio:'Precio',subtotal:'Sub total'}
];
productos: productos[] = [];
ngOnInit(): void {
  this.getprod();
}
getprod(){
this.productos = this.dataservice.getCart();
}
gettotal(): number{
return this.productos.reduce((acc, p) => acc +(p.precio * p.cantidad),0);
}
Delete(id: number){
  Swal.fire({
    text:'Sure?',
    title:'Delete?',
    icon: 'question',
    showCancelButton: true,
    cancelButtonColor: 'red',
  }).then(res => {
    if(res.isConfirmed){
      this.dataservice.Delete(id);
this.getprod();
    }
  })

}
}
