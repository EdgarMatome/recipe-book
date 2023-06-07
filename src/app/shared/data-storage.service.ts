import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private _http: HttpClient, private _recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this._recipeService.getRecipes();
    this._http.put('https://recipe-book-17417-default-rtdb.firebaseio.com/recipes.json', recipes).pipe(tap(response => {
      console.log(response);
    })).subscribe();
  }

  fetchRecipes() {
    return this._http.get<Recipe[]>('https://recipe-book-17417-default-rtdb.firebaseio.com/recipes.json').pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
        })
      }),
      tap(recipes => {
        this._recipeService.setRecipes(recipes)
      }));
  }

}
