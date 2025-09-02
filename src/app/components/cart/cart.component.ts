import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Cart } from '../../Core/cart';
import { CommonModule } from '@angular/common';
import { productos } from '../../Core/productos';
import { DataService } from '../../services/data.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { AlertsService } from '../../services/alerts.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cart',
  imports: [HeaderComponent, CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  dataservice = inject(DataService);
  alertService = inject(AlertsService);
  Direccion!: string;
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
Ordenar(){
  Swal.fire({
    title:'Gracias por su compra!',
    text: 'Su orden se realizara por Whatsapp!',
    icon:'success',
    iconColor:'green',
    confirmButtonText:'Aceptar',
    confirmButtonColor:'green'
  }).then(res =>{
    if(res.isConfirmed){
      this.abrirWhatsApp();
    }
  })
}
abrirWhatsApp() {
   const total = this.gettotal();
   const mensj = 'Total: ';
  const carrito = this.dataservice.getCart();
  let mensaje = 'Hola, quiero esta orden:\n';
  carrito.forEach(p => {
    mensaje += `${p.nombre +''+ p.descripcion} x${p.cantidad} = ${p.precio * p.cantidad} DOP\n`;
  });
  const res = mensj +'$'+total;
  const address = 'Direccion: '+ this.Direccion;
  const url = `https://wa.me/18493577214?text=${encodeURIComponent(mensaje + res +'\n'+ address)}`;
  window.open(url, '_blank');

}

Delete(id: number){
  Swal.fire({
    text:'Seguro desea borrar?',
    title:'Borrar?',
    icon: 'question',
    showCancelButton: true,
    cancelButtonColor: 'red',
    confirmButtonText: 'Si',
    cancelButtonText: 'Cancelar'
  }).then(res => {
    if(res.isConfirmed){
      this.dataservice.Delete(id);
this.getprod();
    }
  })

}
}
