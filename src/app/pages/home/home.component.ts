import {Component, Input} from '@angular/core';
import {CardMenuComponent} from "../../components/card-menu/card-menu.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {MenuModels} from '../../models/menu.models';
import {HeaderComponent} from '../../components/header/header.component';
import {MenuService} from '../../services/menu/menu.service';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {CartComponent} from '../cart/cart.component';

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [CardMenuComponent, FooterComponent, HeaderComponent, HeaderComponent, MatIcon, RouterLink, CartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
@Input() menu! : MenuModels[];
  constructor(private menuService: MenuService) {
    console.log(this.menuService.menu);
  }

  ngOnInit(): void {
    this.menu = this.menuService.menu;

  }

}
