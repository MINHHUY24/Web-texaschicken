import { Routes } from '@angular/router';
import {MenuComponent} from './pages/menu/menu.component';
import {CartComponent} from './pages/cart/cart.component';
import {HomeComponent} from './pages/home/home.component';
import {MenuViewDetailComponent} from './pages/menu-view-detail/menu-view-detail.component';
import {MenuPage2Component} from './pages/menu-page2/menu-page2.component';

export const routes: Routes = [

  {
    path: 'menu',
    component: MenuComponent,
  },

  {
    path: 'menu-page2',
    component: MenuPage2Component,
  },

  {
    path:'cart',
    component: CartComponent,
  },

  {
    path:'menu-view-detail/:id',
    component: MenuViewDetailComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  }
];
