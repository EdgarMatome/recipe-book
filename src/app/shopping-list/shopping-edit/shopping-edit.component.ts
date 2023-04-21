import {
  Component,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
  OnInit,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit{
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService ){

  }

  ngOnInit(){}


  // @Output() inputRecipeAmount = new EventEmitter<string>();

  onAddShopping(e: any) {
    e.preventDefault();
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.slService.addIngredient(newIngredient)

    // e.preventDefault();
    // inputName = this.nameInput.nativeElement.value
    // this.inputRecipeName.emit(inputName.value);
  }
}
