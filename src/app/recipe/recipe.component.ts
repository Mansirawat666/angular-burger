import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeModel } from './recipe.Model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit, OnDestroy {
  selectedRecipe: RecipeModel;
  receipeSubscription: Subscription
  constructor(private receiptService: RecipeService) {
    this.receipeSubscription = this.receiptService.recipeSelected.subscribe(
      (recipe: RecipeModel) => {
        this.selectedRecipe = recipe;
      },
      err => {
      }
    );

    this.receiptService.getReceipeList().subscribe(
      (recipe: RecipeModel) => {
        this.selectedRecipe = recipe;
      },
      err => {
      }
    );

  }

  ngOnInit() {

  }

  ngOnDestroy() {
    if (this.receipeSubscription) {
      this.receipeSubscription.unsubscribe()
    }
  }

}
