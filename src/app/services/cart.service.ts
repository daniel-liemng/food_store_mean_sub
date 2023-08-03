import { Injectable } from '@angular/core';
import { Cart } from '../interfaces/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../interfaces/Food';
import { CartItem } from '../interfaces/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // private cart: Cart = new Cart();
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() {}

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);

    if (cartItem) return;

    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id !== foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number): void {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);

    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (acc, item) => acc + item.price,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('cart', cartJson);

    // listen to cart
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
