import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { CategoriesComponent } from "../../shared/categories/categories.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, RouterOutlet, FooterComponent, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
