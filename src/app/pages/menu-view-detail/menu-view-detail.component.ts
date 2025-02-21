import {Component, Input} from '@angular/core';
import {CardMenuComponent} from '../../components/card-menu/card-menu.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';
import {MatIcon} from '@angular/material/icon';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MenuModels} from '../../models/menu.models';
import {MenuService} from '../../services/menu/menu.service';
import {Menu2Service} from '../../services/menu2/menu-2.service';
import {CartService} from '../../services/cart/cart.service';


@Component({
  selector: 'app-menu-view-detail',
  standalone: true,
  imports: [CardMenuComponent, FooterComponent, HeaderComponent, MatIcon, NavbarComponent, RouterLink],
  templateUrl: './menu-view-detail.component.html',
  styleUrl: './menu-view-detail.component.scss'
})
export class MenuViewDetailComponent {

  @Input () menu! : MenuModels

  currentMenu! : MenuModels | undefined;

  constructor(private activatedRoute: ActivatedRoute, private menuService: MenuService, protected cartService: CartService, private menu2Service: MenuService) {

    const {id} =this.activatedRoute.snapshot.params;
    this.currentMenu = this.menuService.menuViewDetail(id);
    console.log(this.currentMenu)

    this.currentMenu = this.menu2Service.menuViewDetail(id);

  }



}
