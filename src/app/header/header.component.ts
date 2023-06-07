import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;

  constructor(private _recipeDataSvc: DataStorageService) {

  }

  onSaveData() {
    this._recipeDataSvc.storeRecipes();
  }

  onFetchRecipes() {
    this._recipeDataSvc.fetchRecipes().subscribe();
  }

}
