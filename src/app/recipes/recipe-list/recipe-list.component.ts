import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe (`A Test Recipe`, `That is simply a test`, `https://upload.wikimedia.org/wikipedia/commons/9/96/Low-Carb_Zoodles_with_Bolognese.jpg`),
    new Recipe (`Cauliflower pizza crust`, `Recipe on how to make a cauliflower crust pizza`, `https://upload.wikimedia.org/wikipedia/commons/3/37/Cauliflower_pizza_crust_%2817024767906%29.jpg`)
  ];
  // we specify that variable recipe will take array of objects (type Recipe)
  // we need to import it from ../recipe.model

}
