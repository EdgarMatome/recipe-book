import {
  Component,
  Input,
  EventEmitter,
  OnChanges,
  Output,
} from '@angular/core';
import { Recipe } from './../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnChanges {
  @Input() recipe: Recipe;

  @Output() viewRecipeItem = new EventEmitter<void>();

  onViewDetails() {
    this.viewRecipeItem.emit();
  }

  ngOnChanges() {
    // console.log(this.recipe);
  }
}
