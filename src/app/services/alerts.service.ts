import { Injectable,inject } from '@angular/core';
import { Router } from '@angular/router';
import Swal, { SweetAlertIcon } from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  route = inject(Router)
   success(title:string, text:string, btncolor: string){
return Swal.fire({
  title: title,
  text: text,
  icon: "success",
  confirmButtonText:'accept',
  confirmButtonColor: btncolor,
});
 }
  warning(title:string, text:string, btncolor: string){
return Swal.fire({
  title: title,
  text: text,
  icon: 'warning',
  confirmButtonText:'accept',
  confirmButtonColor: btncolor,
});
 }
  Confirm(title:string, text:string,ConfBtn:string, route:string){
  Swal.fire({
  title: title,
  text: text,
  icon: "question",
  showCancelButton: true,
  confirmButtonText: ConfBtn,
  cancelButtonColor: "red",
}).then((result) => {

  if (result.isConfirmed) {
   this.route.navigateByUrl(route);
  } 
});
 }
}
