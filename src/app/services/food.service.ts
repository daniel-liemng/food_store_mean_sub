import { Injectable } from '@angular/core';
import { Food } from '../interfaces/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../interfaces/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAllFood(): Food[] {
    return sample_foods;
  }

  getFoodsBySearchTerm(searchTerm: string) {
    return this.getAllFood().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodByTag(tag: string): Food[] {
    return tag === 'All'
      ? this.getAllFood()
      : this.getAllFood().filter((food) => food.tags?.includes(tag));
  }

  getFoodById(foodId: string): Food {
    return this.getAllFood().find((food) => food.id === foodId) ?? ({} as Food);
  }
}
