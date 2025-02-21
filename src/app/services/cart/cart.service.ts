import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart : any =[];
  addToCart(item :any){
    this.cart.push(item);
  }
}
