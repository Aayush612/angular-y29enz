import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<any>();

  private recipes: Recipe[] = [
    new Recipe(
      'Egg Roll',
      'A delicious Egg-Roll!',
      'https://www.wonderopolis.org/wp-content/uploads/2018/11/dreamstime_l_5556861.jpg',
      [
        new Ingredient('Wheat Chapati', 2),
        new Ingredient('Egg', 2),
        new Ingredient('Sauce', 1),
        new Ingredient('Veggies', 1)
      ]),
    new Recipe('Chocolate Milk Shake',
      'A Delicious Milk Shake!',
      'https://parade.com/wp-content/uploads/2019/05/PeachTruck_Milkshake_046_photo-by-Eliesa-Johnson_small-1024x813.jpg',
      [
        new Ingredient('Milk', 1),
        new Ingredient('Chocolate', 5),
        new Ingredient('Sugar', 3),
        new Ingredient('Sabja', 0.4),
      ]),
    new Recipe('Vanilla Milk Shake',
      'A Delicious Milk Shake!',
      'https://parade.com/wp-content/uploads/2019/05/PeachTruck_Milkshake_046_photo-by-Eliesa-Johnson_small-1024x813.jpg',
      [
        new Ingredient('Milk', 1),
        new Ingredient('Vanilla', 5),
        new Ingredient('Sugar', 3),
        new Ingredient('Sabja', 0.4),
      ]),
      
      new Recipe(
      'Extra Cheese Egg Roll',
      'A delicious Egg-Roll!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Strawberry_milkshake.jpg/1200px-Strawberry_milkshake.jpg',
      [
        new Ingredient('Milk', 2),
        new Ingredient('Egg', 2),
        new Ingredient('Sauce', 1),
        new Ingredient('Cheese', 3)
      ]),
      new Recipe(
      'Extra Cheese Egg Roll',
      'A delicious Egg-Roll!',
      'https://www.wonderopolis.org/wp-content/uploads/2018/11/dreamstime_l_5556861.jpg',
      [
        new Ingredient('Wheat Chapati', 2),
        new Ingredient('Egg', 2),
        new Ingredient('Sauce', 1),
        new Ingredient('Cheese', 3)
      ]),
      new Recipe(
      'Extra Cheese Egg Roll',
      'A delicious Egg-Roll!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Strawberry_milkshake.jpg/1200px-Strawberry_milkshake.jpg',
      [
        new Ingredient('Wheat Chapati', 2),
        new Ingredient('Egg', 2),
        new Ingredient('Sauce', 1),
        new Ingredient('Cheese', 3)
      ]),
    
      new Recipe(
      'Milk Shake',
      'A delicious Shake!',
      'https://thenovicechefblog.com/wp-content/uploads/2017/06/Copycat-Chick-Fil-A-Milkshake-Cookies-Cream-3-sm-735x1103.jpg',
      [
        new Ingredient('Wheat Chapati', 2),
        new Ingredient('Egg', 2),
        new Ingredient('Sauce', 1),
        new Ingredient('Cheese', 3)
      ]),
    
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    console.log("in services recipes")
  }
}
