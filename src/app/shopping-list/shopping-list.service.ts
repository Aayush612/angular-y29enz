import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Chillies', 2),
    new Ingredient('Onions', 10),
    new Ingredient('Raddish', 2),
    new Ingredient('Sauce', 1),
  ];

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    console.log(this.ingredients.length);
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients);
  }
  deleteIngredients(id:number){
    this.ingredients.splice(id,1);
    this.ingredientsChanged.emit(this.ingredients);
    // console.log(this.ingredients.length)

  }
  deleteAll(){
    this.ingredients=[];
    this.ingredientsChanged.emit([]);

  }
}
