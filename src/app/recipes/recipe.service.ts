import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
  // recipeSelected = new Subject<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Meal',
      'This is a very tasty meal made with love for your belly!',
      'https://media.istockphoto.com/id/1320857678/photo/brazilian-fish-stew-moqueca.jpg?b=1&s=170667a&w=0&k=20&c=bcE72Zq71JEVt_lfL0fYWMCMjYV4AtxHxxB4EMIZamw=',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 30)
      ]),
    new Recipe(
      'Berries recipe',
      'A BIG cheesy meaty burger with no sides!',
      'https://images.all-free-download.com/images/graphiclarge/homemade_burger_560254.jpg',
      [
        new Ingredient('Bun', 2),
        new Ingredient('Petty', 2),
        new Ingredient('Lettuce', 2)
      ]),
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
