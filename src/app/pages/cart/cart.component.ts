import {Component, Input} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {MenuModels} from '../../models/menu.models';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../../services/menu/menu.service';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-menu',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Input () menu! : MenuModels

  currentMenu! : MenuModels | undefined;

  constructor(private activatedRoute: ActivatedRoute, private menuService: MenuService, protected cartService: CartService) {

    const {id} =this.activatedRoute.snapshot.params;
    this.currentMenu = this.menuService.menuViewDetail(id);
    console.log(this.currentMenu)
  }

}
