import { Component } from '@angular/core';
import { Cart } from 'src/app/interfaces/Cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  open: boolean = false;
  cartQuantity!: number;

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cartQuantity = cart.totalCount;
    });
  }

  toggleMenu() {
    this.open = !this.open;
  }
}
