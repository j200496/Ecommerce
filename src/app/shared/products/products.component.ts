import { Component,Input,inject } from '@angular/core';
import { productos } from '../../Core/productos';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { AlertsService } from '../../services/alerts.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  alerts = inject(AlertsService);
  dataservice = inject(DataService);
@Input() productos: productos[] =[];
@Input() titulo!: string;

Agregar(prod: productos){
if(prod.cantidad > 0){
  this.dataservice.AddProd({...prod});
  this.alerts.success('Producto agregado!','Producto agregado exitosamente!','green');
  prod.cantidad = 0;
}
}
Increment(p:productos){
p.cantidad ++;
}
Decrement(p: productos){
if(p.cantidad > 0){
  p.cantidad --;
}
}
}
