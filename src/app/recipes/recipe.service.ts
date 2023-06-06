import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recpieSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe (`A Test Recipe`, `That is simply a test`, `https://upload.wikimedia.org/wikipedia/commons/9/96/Low-Carb_Zoodles_with_Bolognese.jpg`),
        new Recipe (`Cauliflower pizza crust`, `Recipe on how to make a cauliflower crust pizza`, `https://upload.wikimedia.org/wikipedia/commons/3/37/Cauliflower_pizza_crust_%2817024767906%29.jpg`)
      ];

    getRecipes() {
       return this.recipes.slice() ;
    //    we do it in this way to copy recipes array and not to get direct reference to orginal array (so we wont change orginal array)
    }


}
