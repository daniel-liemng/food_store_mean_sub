import { Component } from '@angular/core';
import { Cart } from 'src/app/interfaces/Cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cart!: Cart;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  changeQuantity(foodId: string, quantity: string) {
    this.cartService.changeQuantity(foodId, parseInt(quantity));
  }

  removeItem(foodId: string) {
    this.cartService.removeFromCart(foodId);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
