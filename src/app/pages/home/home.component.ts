import { Component } from '@angular/core';
import { Food } from 'src/app/interfaces/Food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }
}
