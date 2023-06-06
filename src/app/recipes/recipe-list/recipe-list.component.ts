import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelectedTwice = new EventEmitter<Recipe>;

  recipes: Recipe[];
  
  onRecipeSelected(recipe: Recipe) {
    this.recipeSelectedTwice.emit(recipe);
  }

  constructor(private recipeServise: RecipeService) {

  }

  ngOnInit(): void {
    this.recipes = this.recipeServise.getRecipes();
  }
}
