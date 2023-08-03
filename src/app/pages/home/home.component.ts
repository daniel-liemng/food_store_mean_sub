import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Food } from 'src/app/interfaces/Food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchTerm!: string | null;
  foods: Food[] = [];

  constructor(private foodService: FoodService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((value) => {
      let searchTerm = value.get('searchTerm');
      let tag = value.get('tag');
      if (searchTerm) {
        this.foods = this.foodService.getFoodsBySearchTerm(searchTerm);
      } else if (tag) {
        this.foods = this.foodService.getAllFoodByTag(tag);
      } else {
        this.foods = this.foodService.getAllFood();
      }
    });
  }
}
