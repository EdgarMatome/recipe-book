import {
  Component,
  Input,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Recipe } from './../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnChanges {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService){

  }

  onViewDetails() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }

  ngOnChanges() {
    // console.log(this.recipe);
  }
}
