import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {CartService} from '../../services/cart/cart.service';
import {MatBadge} from '@angular/material/badge';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterLink, MatBadge],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(protected  cartService: CartService) {

  }

}
