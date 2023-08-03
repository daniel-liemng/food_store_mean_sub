import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/interfaces/Food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  food!: Food;

  constructor(private foodService: FoodService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((value) => {
      let id = value.get('id');
      if (id) {
        this.food = this.foodService.getFoodById(id);
      }
    });
  }

  ngOnInit(): void {}
}
