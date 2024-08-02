import { Component } from '@angular/core';
import { NavbarComponent } from '../../units/navbar/navbar.component';
import { CarouselComponent } from '../../units/carousel/carousel.component';
import { AccordionComponent } from '../../units/accordion/accordion.component';
import { ImagesComponent } from '../images/images.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, AccordionComponent, ImagesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
