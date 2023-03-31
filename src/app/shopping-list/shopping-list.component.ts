import { Component, Input } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Mango', 4),
    new Ingredient('Banana', 12),
  ];

  // @Input() createdIngredient: Ingredient;

  constructor() {}

  onNewIngredient(ingredient: Ingredient) {
    console.log(ingredient);
    // e.preventDefault()
    this.ingredients.push(ingredient);
  }
}
