import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://assets.epicurious.com/photos/5df0013d3b02150008fba52a/1:1/w_1920,c_limit/FryingTechnique_Latkes_RECIPE_V5_120519_13855_V2_final.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://assets.epicurious.com/photos/5df0013d3b02150008fba52a/1:1/w_1920,c_limit/FryingTechnique_Latkes_RECIPE_V5_120519_13855_V2_final.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
