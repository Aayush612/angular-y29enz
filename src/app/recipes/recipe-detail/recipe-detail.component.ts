import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() id:any;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  deleteRecipe(){
    console.log("delete ",this.id);
    this.recipeService.deleteRecipe(this.id);
    this.recipeService.recipeSelected.emit({recipe:undefined,id:undefined})
    alert("Item Deleted!")
  }
}
