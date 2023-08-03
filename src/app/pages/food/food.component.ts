import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/interfaces/Food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  food!: Food;

  constructor(
    private foodService: FoodService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((value) => {
      let id = value.get('id');
      if (id) {
        this.food = this.foodService.getFoodById(id);
      }
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart');
  }
}
