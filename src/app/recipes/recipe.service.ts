import { Recipe } from './recipe.model';


export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'Description test',
      'https://media.istockphoto.com/id/1320857678/photo/brazilian-fish-stew-moqueca.jpg?b=1&s=170667a&w=0&k=20&c=bcE72Zq71JEVt_lfL0fYWMCMjYV4AtxHxxB4EMIZamw='
    ),
    new Recipe(
      'Test recipe',
      'Description test',
      'https://media.istockphoto.com/id/1320857678/photo/brazilian-fish-stew-moqueca.jpg?b=1&s=170667a&w=0&k=20&c=bcE72Zq71JEVt_lfL0fYWMCMjYV4AtxHxxB4EMIZamw='
    ),
  ];

  getRecipes(){
    return this.recipes.slice()
  }
}
