import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeModel } from './recipe.Model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers : [RecipeService]
})
export class RecipeComponent implements OnInit, OnDestroy {
  selectedRecipe:RecipeModel;
  receipeSubscription : Subscription
  constructor(private receiptService : RecipeService  ) {
    console.log("another-",this.receiptService)
    this.receipeSubscription = this.receiptService.recipeSelected.subscribe(
      (recipe : RecipeModel) =>{
        console.log("rec--",recipe)
        this.selectedRecipe=recipe;
      },
      err => {
        console.log("hetting error")
      }
    );

    this.receiptService.getReceipeList().subscribe(
      (recipe : RecipeModel) =>{
        console.log(" yeeee--",recipe)
        this.selectedRecipe=recipe;
      },
      err => {
        console.log("hetting error")
      }
    );

// this.receiptService.onResize$.subscribe(
//       (evt) => {
//          console.log("vtt",evt)
//       }
//   );

  }

  ngOnInit() {

  }

  ngOnDestroy()
  {
   if( this.receipeSubscription)
   {
    this.receipeSubscription.unsubscribe()
   } 
  }

}
