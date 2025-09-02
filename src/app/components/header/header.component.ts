import { Component,Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { encabezado } from '../../Core/encabezado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
